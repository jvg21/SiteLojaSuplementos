package br.pucpr.exemplo.produto.model;

import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class ProdutoDTO {

    @Id
    private Integer id;
    @NotBlank
    private String nome;
    private Double valor;
    private String marca;
    private String peso;
    private String url;
}
