package br.pucpr.exemplo.produto.controller;


import br.pucpr.exemplo.produto.model.ProdutoDTO;
import br.pucpr.exemplo.produto.model.entity.Produto;
import br.pucpr.exemplo.produto.service.ProdutoService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
public class ProdutoControler {

    @Autowired
    private ProdutoService produtoService;
    private ModelMapper modelMapper = new ModelMapper();;
    @PostMapping("/produto/criar")
    public ResponseEntity<ProdutoDTO> salvar(@Valid @RequestBody ProdutoDTO ProdutoDTO) {
        Produto produto = this.modelMapper.map(ProdutoDTO, Produto.class);
        produtoService.salvar(produto);
        return new ResponseEntity(ProdutoDTO, HttpStatus.CREATED);
    }

    @GetMapping("/produto/listar")
    public List<ProdutoDTO> listar() {
        List<Produto> produtos = produtoService.listar();
        return produtos.stream().map(produto -> modelMapper.map(produto, ProdutoDTO.class)).
                collect(Collectors.toList());
    }

    @GetMapping("/produto/selecionar/{idProduto}")
      public Produto selecionar(@PathVariable int idProduto){
      return produtoService.selecionar(idProduto);
    }

    @DeleteMapping("/produto/excluir/{idProduto}")
    public String deletar(@PathVariable int idProduto){
      produtoService.excluir(idProduto);
      return "Produto Deletado";
    }

    @PutMapping("/produto/atualizar/{idProduto}")
    public Produto atualizar(@PathVariable int idProduto, @Valid @RequestBody ProdutoDTO ProdutoDTO){
      Produto produto = this.modelMapper.map(ProdutoDTO, Produto.class);
      return produtoService.atualizar(idProduto,produto);
    }

//    @PutMapping("/produto/{idProduto}/ativar")
//    public Produto desativar(@PathVariable int idProduto){
//      return produtoService.desativar(idProduto);
//    }
}
