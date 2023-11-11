package br.pucpr.exemplo.usuario.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@Entity
@Table(name = "USUARIO")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;


    @Column(name = "nome")
    private String nome;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;
    @Column(name = "cep")
    private String cep;
    @Column(name = "uf")
    private String uf;
    @Column(name = "cidade")
    private String cidade;
    @Column(name = "endereco")
    private String endereco;
    @Column(name = "numero")
    private Integer numero;
    @Column(name = "complemento")
    private String complemento;

  @Column(name = "acesso")
  private String acesso;


}
