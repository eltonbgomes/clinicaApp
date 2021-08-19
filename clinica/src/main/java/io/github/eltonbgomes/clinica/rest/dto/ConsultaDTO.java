package io.github.eltonbgomes.clinica.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ConsultaDTO {
    private Integer idPaciente;
    private Integer idMedico;
    private Integer numConsultorio;
    private String dataCadastro;
    private String dataConsulta;
    private String horaConsulta;
}
