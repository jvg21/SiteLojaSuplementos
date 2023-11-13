package br.pucpr.exemplo.login.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Data
@Getter
@Setter
public class LoginDTO {

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
    private Integer numero;
    private String complemento;
    private String acesso;

}
