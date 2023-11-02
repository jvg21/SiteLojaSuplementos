package br.pucpr.exemplo.transportadora.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@Table(name = "transportadora")
public class Transportadora {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;


    @Column(name = "cnpjTransportadora")
    private String cnpj;

    @Column(name = "nomeTransportadora")
    private String nome;

    @Column(name = "emailTransportadora")
    private String email;




}
