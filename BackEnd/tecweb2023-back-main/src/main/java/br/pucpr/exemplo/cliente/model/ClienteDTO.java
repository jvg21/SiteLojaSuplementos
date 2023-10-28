package br.pucpr.exemplo.cliente.model;

import jakarta.validation.constraints.*;
import lombok.*;

@Data
@Getter
@Setter
public class ClienteDTO {

    private Integer id;

    @NotBlank
    private String nome;
    private String cpf;

}
