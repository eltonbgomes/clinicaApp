package io.github.eltonbgomes.clinica;

import io.github.eltonbgomes.clinica.model.entity.Paciente;
import io.github.eltonbgomes.clinica.model.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ClinicaApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClinicaApplication.class, args);
    }
}
