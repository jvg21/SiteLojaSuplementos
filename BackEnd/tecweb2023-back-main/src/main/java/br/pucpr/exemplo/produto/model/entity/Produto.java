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

  @Column(name = "nome")
  private String nome;

  @Column(name = "valor")
  private Double valor;

  @Column(name = "marca")
  private String marca;

  @Column(name = "peso")
  private Integer peso;

  @Column(name = "medidaPeso")
  private String medidaPeso;

  @Column(name = "ativado")
  private boolean ativado;

  @Column(name = "url")
  private String url;

  @Column(name = "descricao")
  private String descricao;



}
