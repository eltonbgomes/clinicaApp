package io.github.eltonbgomes.clinica.model.repository;

import io.github.eltonbgomes.clinica.model.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<Paciente, Integer> {
}
