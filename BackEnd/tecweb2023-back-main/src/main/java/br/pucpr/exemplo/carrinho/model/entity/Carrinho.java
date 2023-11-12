package br.pucpr.exemplo.carrinho.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@Entity
@Table(name = "CARRINHO")
public class Carrinho {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @Column(name = "idCliente")
  private Integer idCliente;

  @Column(name = "idProduto")
  private Integer idProduto;


}
