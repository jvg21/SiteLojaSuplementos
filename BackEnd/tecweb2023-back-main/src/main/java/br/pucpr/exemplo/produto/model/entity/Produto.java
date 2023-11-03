package br.pucpr.exemplo.produto.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;


    @Column(name = "nomeProduto")
    private String nome;

    @Column(name = "valorProduto")
    private Double valor;

    @Column(name = "marcaProduto")
    private String marca;

    @Column(name = "pesoProduto")
    private String peso;

  @Column(name = "urlProduto")
  private String url;


}
