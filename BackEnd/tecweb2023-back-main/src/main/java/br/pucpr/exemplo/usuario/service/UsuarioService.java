package br.pucpr.exemplo.usuario.service;

import br.pucpr.exemplo.usuario.model.entity.*;
import br.pucpr.exemplo.usuario.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    public Usuario selecionar(Integer id) {
      Usuario user = null;
      if (usuarioRepository.findById(id).isPresent()) {
        user = usuarioRepository.findById(id).get();
      }
      return user;
    }

    public Usuario atualizar(Integer id,Usuario usuario){

        if (usuarioRepository.findById(id).isPresent()){
          Usuario user = usuarioRepository.findById(id).get();

          if (Objects.nonNull(usuario.getNome()) && !"".equalsIgnoreCase(usuario.getNome())) {
            user.setNome(usuario.getNome());
          }
          if (Objects.nonNull(usuario.getEmail()) && !"".equalsIgnoreCase(usuario.getEmail())) {
            user.setEmail(usuario.getEmail());
          }
          if (Objects.nonNull(usuario.getCpf()) && !"".equalsIgnoreCase(usuario.getCpf())) {
            user.setCpf(usuario.getCpf());
          }

          return usuarioRepository.save(user);
    }
      return null;
    }
    public void excluir(Integer id) {
        usuarioRepository.deleteById(id);
    }
}
