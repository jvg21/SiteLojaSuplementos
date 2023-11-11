package br.pucpr.exemplo.usuario.repository;

import br.pucpr.exemplo.usuario.model.entity.*;
import org.springframework.data.jpa.repository.*;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
}
