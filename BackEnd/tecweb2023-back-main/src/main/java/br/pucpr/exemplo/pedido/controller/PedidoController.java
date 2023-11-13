package br.pucpr.exemplo.pedido.controller;

import br.pucpr.exemplo.pedido.model.PedidoDTO;
import br.pucpr.exemplo.pedido.model.entity.Pedido;
import br.pucpr.exemplo.pedido.service.PedidoService;
import jakarta.validation.*;
import org.modelmapper.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.*;
@RestController
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;
    private ModelMapper modelMapper = new ModelMapper();;

    @PostMapping("/pedido/criar")
    public ResponseEntity<PedidoDTO> salvar(@Valid @RequestBody PedidoDTO pedidoDTO) {
        Pedido usuario = this.modelMapper.map(pedidoDTO, Pedido.class);
        pedidoService.salvar(usuario);
        return new ResponseEntity(pedidoDTO, HttpStatus.CREATED);
    }

    @GetMapping("/pedido/listar/{idUsuario}")
    public List<PedidoDTO> listar(@PathVariable Integer idUsuario) {
        List<Pedido> usuarios = pedidoService.listar(idUsuario);
        return usuarios.stream().map(usuario -> modelMapper.map(usuario, PedidoDTO.class)).
                collect(Collectors.toList());
    }
    @DeleteMapping("/pedido/limpar/{idUsuario}")
    public void limpar(@PathVariable int idUsuario){
      pedidoService.limpar(idUsuario);
    }

    @DeleteMapping("/pedido/excluir/{id}")
    public void deletar(@PathVariable int id){
      pedidoService.excluir(id);
    }

}
