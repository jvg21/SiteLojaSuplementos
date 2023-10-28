package ProjetoMaromba.api.usuario.service;

import ProjetoMaromba.api.usuario.entity.Usuario;
import ProjetoMaromba.api.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario save(Usuario usuario){
      return this.usuarioRepository.save(usuario);
    }

    public List<Usuario> list(){
      return this.usuarioRepository.findAll();
    }

    public Usuario update(Usuario usuario,Long id){
        Usuario userDB = usuarioRepository.findById(id).get();

        if (Objects.nonNull((usuario.getNomeUsuario())) && !"".equalsIgnoreCase(usuario.getNomeUsuario())){
          userDB.setNomeUsuario(usuario.getNomeUsuario());
        }

        if (Objects.nonNull((usuario.getEmailUsuario())) && !"".equalsIgnoreCase(usuario.getEmailUsuario())){
          userDB.setEmailUsuario(usuario.getEmailUsuario());
        }
        if (Objects.nonNull((usuario.getTelefoneUsuario())) && !"".equalsIgnoreCase(usuario.getTelefoneUsuario())){
          userDB.setTelefoneUsuario(usuario.getTelefoneUsuario());
        }
        if (Objects.nonNull((usuario.getCpfUsuario())) && !"".equalsIgnoreCase(usuario.getCpfUsuario())){
          userDB.setCpfUsuario(usuario.getCpfUsuario());
        }
      return usuarioRepository.save(userDB);

    }
    public void  delete(Long id){
      this.usuarioRepository.deleteById(id);
    }

}
