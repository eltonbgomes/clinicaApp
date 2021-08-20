package io.github.eltonbgomes.clinica.rest;

import io.github.eltonbgomes.clinica.model.entity.Medico;
import io.github.eltonbgomes.clinica.model.entity.Paciente;
import io.github.eltonbgomes.clinica.model.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/medicos")
public class MedicoController {

    private final MedicoRepository repository;

    @Autowired
    public MedicoController(MedicoRepository repository){
        this.repository = repository;
    }

    @GetMapping
    public List<Medico> obterTodos(){
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Medico salvar (@RequestBody @Valid Medico medico){
        return repository.save(medico);
    }

    @GetMapping("{id}")
    public Medico BuscarId(@PathVariable Integer id){
        return repository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medico não encontrado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        repository
                .findById(id)
                .map(medico -> {
                    repository.delete(medico);
                    return  Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medico não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editar(@PathVariable Integer id, @RequestBody @Valid Medico medicoEditado){
        repository
                .findById(id)
                .map(medico -> {
                    //medicoEditado.setId(medico.getId());
                    medico.setNome(medicoEditado.getNome());
                    medico.setCrm(medicoEditado.getCrm());
                    return repository.save(medicoEditado);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medico não encontrado"));
    }
}
