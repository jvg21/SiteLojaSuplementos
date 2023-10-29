package br.pucpr.exemplo.transportadora.repository;

import br.pucpr.exemplo.transportadora.model.entity.Transportadora;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransportadoraRepository extends JpaRepository<Transportadora,Integer> {
}
