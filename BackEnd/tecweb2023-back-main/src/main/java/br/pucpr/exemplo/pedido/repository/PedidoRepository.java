package br.pucpr.exemplo.pedido.repository;

import br.pucpr.exemplo.pedido.model.entity.Pedido;
import br.pucpr.exemplo.produto.model.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido,Integer> {
}
