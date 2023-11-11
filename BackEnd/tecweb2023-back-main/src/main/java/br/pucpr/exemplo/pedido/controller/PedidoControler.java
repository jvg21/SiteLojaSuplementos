package br.pucpr.exemplo.pedido.controller;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.pucpr.exemplo.pedido.model.PedidoDTO;
import br.pucpr.exemplo.pedido.model.entity.Pedido;
import br.pucpr.exemplo.pedido.service.PedidoService;

import java.util.List;
import java.util.stream.Collectors;
@RestController
public class PedidoControler {

    @Autowired
    private PedidoService produtoService;
    private ModelMapper modelMapper = new ModelMapper();;
    @PostMapping("/pedido/criar")
    public ResponseEntity<PedidoDTO> salvar(@Valid @RequestBody PedidoDTO PedidoDTO) {
        Pedido produto = this.modelMapper.map(PedidoDTO, Pedido.class);
        produtoService.salvar(produto);
        return new ResponseEntity(PedidoDTO, HttpStatus.CREATED);
    }

    @GetMapping("/pedido/listar")
    public List<PedidoDTO> listar() {
        List<Pedido> produtos = produtoService.listar();
        return produtos.stream().map(produto -> modelMapper.map(produto, PedidoDTO.class)).
                collect(Collectors.toList());
    }

    @GetMapping("/pedido/selecionar/{idProduto}")
      public Pedido selecionar(@PathVariable int idProduto){
      return produtoService.selecionar(idProduto);
    }

    @DeleteMapping("/pedido/excluir/{idProduto}")
    public String deletar(@PathVariable int idProduto){
      produtoService.excluir(idProduto);
      return "Produto Deletado";
    }

    @PutMapping("/pedido/atualizar/{idProduto}")
    public Pedido atualizar(@PathVariable int idProduto, @Valid @RequestBody PedidoDTO PedidoDTO){
      Pedido produto = this.modelMapper.map(PedidoDTO, Pedido.class);
      return produtoService.atualizar(idProduto,produto);
    }
}
