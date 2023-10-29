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


    @Column(name = "nomeUsuario")
    private String nome;

    @Column(name = "cpfUsuario")
    private String email;

    @Column(name = "emailUsuario")
    private String cpf;


}
