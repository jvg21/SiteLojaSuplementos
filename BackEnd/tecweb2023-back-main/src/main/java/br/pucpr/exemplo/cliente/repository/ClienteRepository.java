package br.pucpr.exemplo.cliente.repository;

import br.pucpr.exemplo.cliente.model.entity.*;
import org.springframework.data.jpa.repository.*;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
