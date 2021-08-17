package io.github.eltonbgomes.clinica.model.entity;

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
    @JoinColumn(name = "id_paciente")
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "id_medico")
    private Medico medico;

    @Column(name = "data_cadastro")
    private LocalDate dataCadastro;

    @Column(name = "data_consulta")
    private String dataConsulta;

    @Column(name = "hora_consulta")
    private String horaColsulta;
}
