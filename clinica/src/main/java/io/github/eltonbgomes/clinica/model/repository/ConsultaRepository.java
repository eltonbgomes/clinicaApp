package io.github.eltonbgomes.clinica.model.repository;

import io.github.eltonbgomes.clinica.model.entity.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultaRepository extends JpaRepository<Consulta, Integer> {
}
