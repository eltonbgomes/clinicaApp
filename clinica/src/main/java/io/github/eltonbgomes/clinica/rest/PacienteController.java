package io.github.eltonbgomes.clinica.rest;

import io.github.eltonbgomes.clinica.model.entity.Paciente;
import io.github.eltonbgomes.clinica.model.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    private final PacienteRepository repository;

    @Autowired
    public PacienteController(PacienteRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Paciente salvar(@RequestBody Paciente paciente){
        return repository.save(paciente);
    }

    @GetMapping("{id}")
    public Paciente BuscarId(@PathVariable Integer id){
        return repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        repository
                .findById(id)
                .map(paciente -> {
                    repository.delete(paciente);
                    return  Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editar(@PathVariable Integer id, @RequestBody Paciente pacienteEditado){
        repository
                .findById(id)
                .map(paciente -> {
                    //pacienteEditado.setId(paciente.getId());
                    paciente.setNome(pacienteEditado.getNome());
                    paciente.setCpf(pacienteEditado.getCpf());
                    return repository.save(pacienteEditado);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
