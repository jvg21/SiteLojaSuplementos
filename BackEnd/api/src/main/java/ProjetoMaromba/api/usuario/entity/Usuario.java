package ProjetoMaromba.api.usuario.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;


@Data
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private String nomeUsuario;
  private String cpfUsuario;
  private String emailUsuario;
  private String telefoneUsuario;

}
