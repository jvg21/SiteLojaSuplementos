package br.pucpr.exemplo.usuario.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Data
@Getter
@Setter
public class UsuarioDTO {

    @Id
    private Integer id;
    @NotBlank
    private String login;
    private String nome;
    private String email;
}
