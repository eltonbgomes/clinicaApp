package io.github.eltonbgomes.clinica.rest;

import io.github.eltonbgomes.clinica.model.entity.Consulta;
import io.github.eltonbgomes.clinica.model.repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/consultas")
public class ConsultaController {

    private final ConsultaRepository repository;

    @Autowired
    public ConsultaController(ConsultaRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Consulta salvar(@RequestBody @Valid Consulta consulta){
        return repository.save(consulta);
    }

    @GetMapping("{id}")
    public Consulta BuscarId(@PathVariable Integer id){
        return repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Consulta não encontrado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        repository
                .findById(id)
                .map(consulta -> {
                    repository.delete(consulta);
                    return  Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Consulta não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editar(@PathVariable Integer id, @RequestBody @Valid Consulta consultaEditado){
        repository
                .findById(id)
                .map(consulta -> {
                    consultaEditado.setId(consulta.getId());
                    return repository.save(consultaEditado);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Consulta não encontrado"));
    }

}
