package br.pucpr.exemplo.login.controller;

import br.pucpr.exemplo.login.model.LoginDTO;
import br.pucpr.exemplo.login.model.entity.Login;
import br.pucpr.exemplo.login.service.LoginService;
import jakarta.validation.*;
import org.modelmapper.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.*;
@RestController
public class LoginController {
    @Autowired
    private LoginService loginService;
    private ModelMapper modelMapper = new ModelMapper();;


    @PostMapping("/login/setlogin")
    public ResponseEntity<LoginDTO> salvar(@Valid @RequestBody LoginDTO loginDTO) {
        Login usuario = this.modelMapper.map(loginDTO, Login.class);
        loginService.salvar(usuario);
        return new ResponseEntity(loginDTO, HttpStatus.CREATED);
    }

    @GetMapping("/login/listar")
    public Login listar() {
        List<Login> usuarios = loginService.listar();
         usuarios.stream().map(usuario -> modelMapper.map(usuario, LoginDTO.class)).
                collect(Collectors.toList());
        return usuarios.get(0);
    }

    @DeleteMapping("/login/excluir")
    public void deletar(){
      loginService.excluir();
//      return "Usuário Deletado";
    }

}
