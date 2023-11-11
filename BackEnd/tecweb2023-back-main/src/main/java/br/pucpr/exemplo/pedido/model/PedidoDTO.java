package br.pucpr.exemplo.pedido.model;

import java.sql.Date;

import br.pucpr.exemplo.produto.model.ProdutoDTO;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class PedidoDTO {

    @Id
    private Integer id;
    @NotBlank
    private Date data;
    private Date dataEntrega;
    private Double valor;
    private String status;
    private String idCliente;
    private String idTransportadora;
    private ProdutoDTO[] produtos;
    private boolean ativado;
}
