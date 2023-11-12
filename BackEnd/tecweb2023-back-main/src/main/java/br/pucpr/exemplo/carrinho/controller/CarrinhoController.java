package br.pucpr.exemplo.carrinho.controller;

import jakarta.validation.*;
import org.modelmapper.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import br.pucpr.exemplo.carrinho.model.CarrinhoDTO;
import br.pucpr.exemplo.carrinho.model.entity.Carrinho;
import br.pucpr.exemplo.carrinho.service.CarrinhoService;

import java.util.*;
import java.util.stream.*;
@RestController
public class CarrinhoController {
    @Autowired
    private CarrinhoService carrinhoService;
    private ModelMapper modelMapper = new ModelMapper();;

    @PostMapping("/carrinho/criar")
    public ResponseEntity<CarrinhoDTO> salvar(@Valid @RequestBody CarrinhoDTO carrinhoDTO) {
        Carrinho usuario = this.modelMapper.map(carrinhoDTO, Carrinho.class);
        carrinhoService.salvar(usuario);
        return new ResponseEntity(carrinhoDTO, HttpStatus.CREATED);
    }

    @GetMapping("/carrinho/listar/{idUsuario}")
    public List<CarrinhoDTO> listar(@PathVariable int idUsuario) {
        List<Carrinho> usuarios = carrinhoService.listar(idUsuario);
        return usuarios.stream().map(usuario -> modelMapper.map(usuario, CarrinhoDTO.class)).
                collect(Collectors.toList());
    }


    @DeleteMapping("/carrinho/limpar/{idUsuario}")
    public void limpar(@PathVariable int idUsuario){
      carrinhoService.limpar(idUsuario);
    }

    @DeleteMapping("/carrinho/excluir/{id}")
    public void deletar(@PathVariable int id){
      carrinhoService.excluir(id);
    }

}
