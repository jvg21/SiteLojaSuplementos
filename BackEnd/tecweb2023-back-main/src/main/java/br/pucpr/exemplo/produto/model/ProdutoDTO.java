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
    private Integer peso;
    private String medidaPeso;
    private boolean ativado;
    private String url;
}
