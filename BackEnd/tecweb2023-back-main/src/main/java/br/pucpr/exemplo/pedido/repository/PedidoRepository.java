package br.pucpr.exemplo.pedido.repository;

import br.pucpr.exemplo.pedido.model.entity.Pedido;
import org.springframework.data.jpa.repository.*;

public interface PedidoRepository extends JpaRepository<Pedido,Integer> {
}
