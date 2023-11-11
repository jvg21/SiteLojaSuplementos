package br.pucpr.exemplo.produto.service;

import br.pucpr.exemplo.produto.model.entity.Produto;
import br.pucpr.exemplo.produto.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository ProdutoRepository;

    public Produto salvar(Produto usuario) {
        return ProdutoRepository.save(usuario);
    }

    public List<Produto> listar() {
        return ProdutoRepository.findAll();
    }

    public Produto selecionar(Integer id) {
      Produto user = null;
      if (ProdutoRepository.findById(id).isPresent()) {
        user = ProdutoRepository.findById(id).get();
      }
      return user;
    }

    public Produto atualizar(Integer id, Produto usuario){

        if (ProdutoRepository.findById(id).isPresent()){
          Produto user = ProdutoRepository.findById(id).get();

          if (Objects.nonNull(usuario.getNome()) && !"".equalsIgnoreCase(usuario.getNome())) {
            user.setNome(usuario.getNome());
          }
          if (Objects.nonNull(usuario.getMarca()) && !"".equalsIgnoreCase(usuario.getMarca())) {
            user.setMarca(usuario.getMarca());
          }
          if (Objects.nonNull(usuario.getMedidaPeso()) && !"".equalsIgnoreCase(usuario.getMedidaPeso())) {
            user.setMedidaPeso(usuario.getMedidaPeso());
          }
          if (Objects.nonNull(usuario.getUrl()) && !"".equalsIgnoreCase(usuario.getUrl())) {
            user.setUrl(usuario.getUrl());
          }
          if (Objects.nonNull(usuario.getDescricao()) && !"".equalsIgnoreCase(usuario.getDescricao())) {
            user.setDescricao(usuario.getDescricao());
          }

          if (Objects.nonNull(usuario.getValor())) {
            user.setValor(usuario.getValor());
          }
          user.setPeso(usuario.getPeso());
          user.setAtivado(usuario.isAtivado());

          return ProdutoRepository.save(user);
    }
      return null;
    }
    public void excluir(Integer id) {
        ProdutoRepository.deleteById(id);
    }


//    public Produto desativar(Integer id){
//      Produto user = null;
//      if (ProdutoRepository.findById(id).isPresent()) {
//        user = ProdutoRepository.findById(id).get();
//        user.setAtivado(!user.isAtivado());
//        ProdutoRepository.save(user);
//      }
//      return user;
//
//    }
}
