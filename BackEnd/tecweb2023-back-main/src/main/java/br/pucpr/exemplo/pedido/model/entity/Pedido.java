package br.pucpr.exemplo.pedido.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@Entity
@Table(name = "Pedido")
public class Pedido {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @Column(name = "idCliente")
  private Integer idCliente;

  @Column(name = "produto")
  private String produto;

  @Column(name = "dataEntrega")
  private String dataEntrega;

  @Column(name = "valor")
  private Double valor;

  @Column(name = "entrega")
  private String entrega;

  @Column(name = "metodo")
  private String metodo;


}
