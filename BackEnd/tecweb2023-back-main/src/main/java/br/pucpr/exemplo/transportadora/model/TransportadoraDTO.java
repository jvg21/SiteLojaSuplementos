package br.pucpr.exemplo.transportadora.model;

import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class TransportadoraDTO {

    @Id
    private Integer id;
    @NotBlank
    private String cnpj;
    private String nome;
    private String email;
    private boolean ativado;
}
