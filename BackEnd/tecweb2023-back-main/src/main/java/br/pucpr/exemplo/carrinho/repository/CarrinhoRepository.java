package br.pucpr.exemplo.carrinho.repository;

import br.pucpr.exemplo.carrinho.model.entity.Carrinho;
import org.springframework.data.jpa.repository.*;

public interface CarrinhoRepository extends JpaRepository<Carrinho,Integer> {
}
