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
    private String nome;
    private String email;
    private String cpf;
    private String senha;
    private String cep;
    private String uf;
    private String cidade;
    private String endereco;

}
