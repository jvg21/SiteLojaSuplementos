package br.pucpr.exemplo.produto.repository;

import br.pucpr.exemplo.produto.model.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto,Integer> {
}
