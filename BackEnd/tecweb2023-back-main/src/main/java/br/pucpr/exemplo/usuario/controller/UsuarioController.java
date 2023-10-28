package br.pucpr.exemplo.usuario.controller;

import br.pucpr.exemplo.cliente.model.*;
import br.pucpr.exemplo.cliente.model.entity.*;
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
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    private ModelMapper modelMapper = new ModelMapper();;

    @PostMapping
    public ResponseEntity<UsuarioDTO> salvar(@Valid @RequestBody UsuarioDTO usuarioDTO) {
        Usuario usuario = this.modelMapper.map(usuarioDTO, Usuario.class);
        usuarioService.salvar(usuario);
        return new ResponseEntity(usuarioDTO, HttpStatus.CREATED);
    }

    @GetMapping
    public List<UsuarioDTO> listar() {
        List<Usuario> usuarios = usuarioService.listar();
        return usuarios.stream().map(usuario -> modelMapper.map(usuario, UsuarioDTO.class)).
                collect(Collectors.toList());
    }
}
