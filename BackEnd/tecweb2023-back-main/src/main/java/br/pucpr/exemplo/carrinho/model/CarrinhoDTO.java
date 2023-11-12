package br.pucpr.exemplo.carrinho.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Data
@Getter
@Setter
public class CarrinhoDTO {

    @Id
    private Integer id;
    
    private Integer idCliente;
    private Integer idProduto;

}
