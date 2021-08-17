package io.github.eltonbgomes.clinica.model.repository;

import io.github.eltonbgomes.clinica.model.entity.Medico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoRepository extends JpaRepository<Medico, Integer> {

}
