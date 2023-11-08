package br.pucpr.exemplo.usuario.controller;

import br.pucpr.exemplo.usuario.model.*;
import br.pucpr.exemplo.usuario.model.entity.*;
import br.pucpr.exemplo.usuario.service.*;
import jakarta.validation.*;
import org.modelmapper.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.*;
@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    private ModelMapper modelMapper = new ModelMapper();;
    @PostMapping("/usuario/criar")
    public ResponseEntity<UsuarioDTO> salvar(@Valid @RequestBody UsuarioDTO usuarioDTO) {
        Usuario usuario = this.modelMapper.map(usuarioDTO, Usuario.class);
        usuarioService.salvar(usuario);
        return new ResponseEntity(usuarioDTO, HttpStatus.CREATED);
    }

    @GetMapping("/usuario/listar")
    public List<UsuarioDTO> listar() {
        List<Usuario> usuarios = usuarioService.listar();
        return usuarios.stream().map(usuario -> modelMapper.map(usuario, UsuarioDTO.class)).
                collect(Collectors.toList());
    }

    @GetMapping("/usuario/selecionar/{idUsuario}")
      public Usuario selecionar(@PathVariable int idUsuario){
      return usuarioService.selecionar(idUsuario);
    }
    @DeleteMapping("/usuario/excluir/{idUsuario}")
    public String deletar(@PathVariable int idUsuario){
      usuarioService.excluir(idUsuario);
      return "Usuário Deletado";
    }

    @PutMapping("/usuario/atualizar/{idUsuario}")
    public Usuario atualizar(@PathVariable int idUsuario,@Valid @RequestBody UsuarioDTO usuarioDTO){
      Usuario usuario = this.modelMapper.map(usuarioDTO, Usuario.class);
      return usuarioService.atualizar(idUsuario,usuario);
    }
}
