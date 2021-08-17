package io.github.eltonbgomes.clinica.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column(nullable = false, length = 100)
    private String especialidade;

    @Column(nullable = false, length = 10)
    private String crm;

    @Column(nullable = false, length = 3)
    private Integer idade;

    @Column(name = "data_cadastro")
    private LocalDate dataCadastro;

}
