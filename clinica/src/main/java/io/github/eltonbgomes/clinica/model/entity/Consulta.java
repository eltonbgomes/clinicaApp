package io.github.eltonbgomes.clinica.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_paciente", nullable = false)
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "id_medico", nullable = false)
    private Medico medico;

    @Column(name = "num_consultorio", nullable = false)
    private Integer NumConsultorio;

    @Column(name = "data_cadastro", updatable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataCadastro;

    @Column(name = "data_consulta")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataConsulta;

    @Column(name = "hora_consulta")
    private String horaConsulta;

    @PrePersist
    public void prePersist(){
        setDataCadastro(LocalDate.now());
    }
}
