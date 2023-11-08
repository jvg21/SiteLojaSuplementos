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
          if (Objects.nonNull(usuario.getCep()) && !"".equalsIgnoreCase(usuario.getCep())) {
            user.setCep(usuario.getCep());
          }
          if (Objects.nonNull(usuario.getEndereco()) && !"".equalsIgnoreCase(usuario.getEndereco())) {
            user.setEndereco(usuario.getEndereco());
          }
          if (Objects.nonNull(usuario.getComplemento()) && !"".equalsIgnoreCase(usuario.getComplemento())) {
            user.setComplemento(usuario.getComplemento());
          }
          if (Objects.nonNull(usuario.getUf()) && !"".equalsIgnoreCase(usuario.getUf())) {
            user.setUf(usuario.getUf());
          }
          if (Objects.nonNull(usuario.getCidade()) && !"".equalsIgnoreCase(usuario.getCidade())) {
            user.setCidade(usuario.getCidade());
          }
          if (Objects.nonNull(usuario.getNumero()) ) {
            user.setNumero(usuario.getNumero());
          }
          return usuarioRepository.save(user);
    }
      return null;
    }
    public void excluir(Integer id) {
        usuarioRepository.deleteById(id);
    }

    public Usuario logar(String email,String senha){
      List<Usuario> lista = listar();
      for (int i = 0;i<lista.size();i++){
        if (email.equals(lista.get(i).getEmail()) && senha.equals(lista.get(i).getSenha()) ){
          return lista.get(i);
        }
      }
      return new Usuario();
    }
}
