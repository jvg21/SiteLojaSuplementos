package br.pucpr.exemplo.pedido.model.entity;

import br.pucpr.exemplo.produto.model.ProdutoDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@Table(name = "pedido")
public class Pedido {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @Column(name = "data")
  private String data;

  @Column(name = "dataEntrega")
  private String datadataEntrega;

  @Column(name = "valor")
  private Double valor;

  @Column(name = "status")
  private String status;

  @Column(name = "idCliente")
  private Integer idCliente;
  
  @Column(name = "idTransportadora")
  private Integer idTransportadora;

  @Column(name = "produtos")
  private ProdutoDTO[] produtos;

  @Column(name = "ativado")
  private boolean ativado;



}
