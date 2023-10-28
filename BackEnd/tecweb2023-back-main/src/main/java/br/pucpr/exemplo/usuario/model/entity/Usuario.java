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

    @Column(name = "LOGIN")
    private String login;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "EMAIL")
    private String email;
}
