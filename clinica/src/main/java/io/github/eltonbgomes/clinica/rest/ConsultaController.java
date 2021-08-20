package io.github.eltonbgomes.clinica.rest;

import io.github.eltonbgomes.clinica.model.entity.Consulta;
import io.github.eltonbgomes.clinica.model.entity.Medico;
import io.github.eltonbgomes.clinica.model.entity.Paciente;
import io.github.eltonbgomes.clinica.model.repository.ConsultaRepository;
import io.github.eltonbgomes.clinica.model.repository.MedicoRepository;
import io.github.eltonbgomes.clinica.model.repository.PacienteRepository;
import io.github.eltonbgomes.clinica.rest.dto.ConsultaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/consultas")
public class ConsultaController {

    private final ConsultaRepository repository;
    private final MedicoRepository medicoRepository;
    private final PacienteRepository pacienteRepository;

    @Autowired
    public ConsultaController(
            ConsultaRepository repository,
            MedicoRepository medicoRepository,
            PacienteRepository pacienteRepository) {
                this.repository = repository;
                this.medicoRepository = medicoRepository;
                this.pacienteRepository = pacienteRepository;
    }

    @GetMapping
    public List<Consulta> obterTodos(){
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Consulta salvar(@RequestBody ConsultaDTO dto){
        LocalDate dataConsulta = LocalDate.parse(dto.getDataConsulta(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        Integer idPaciente = dto.getIdPaciente();
        Integer idMedico = dto.getIdMedico();

        Paciente paciente = pacienteRepository
                .findById(idPaciente)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, "Paciente Inexistente."));

        Medico medico = medicoRepository
                .findById(idMedico)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, "Médico Inexistente."));

        Consulta consulta = new Consulta();

        consulta.setDataConsulta(dataConsulta);
        consulta.setHoraConsulta(dto.getHoraConsulta());
        consulta.setNumConsultorio(dto.getNumConsultorio());
        consulta.setPaciente(paciente);
        consulta.setMedico(medico);

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
