package br.pucpr.exemplo.pedido.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
public class PedidoDTO {

    @Id
    private Integer id;

    private Integer idCliente;
    private Integer idProduto;
    private String dataEntrega;
    private Double valor;
    private boolean entrega;

}
