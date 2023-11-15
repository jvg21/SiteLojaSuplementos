package br.pucpr.exemplo.carrinho.service;

import br.pucpr.exemplo.carrinho.model.entity.Carrinho;
import br.pucpr.exemplo.carrinho.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    public Carrinho salvar(Carrinho carrinho) {
        return carrinhoRepository.save(carrinho);
    }

    public List<Carrinho> listar(Integer idUsuario) {
        List<Carrinho> lista = carrinhoRepository.findAll();
         List<Carrinho> listaReturn = new ArrayList<>();

         for(int i = 0; i<lista.size(); i++){
           if (lista.get(i).getIdCliente() !=null){
             if(lista.get(i).getIdCliente().equals(idUsuario) ){
               listaReturn.add(lista.get(i));
             }
           }

         }

        return listaReturn;
    }

    public Carrinho selecionar(Integer id) {
      Carrinho user = null;
      if (carrinhoRepository.findById(id).isPresent()) {
        user = carrinhoRepository.findById(id).get();
      }
      return user;
    }

    public void excluir(Integer id) {

      List<Carrinho> lista = carrinhoRepository.findAll();
      for(int i = 0; i<lista.size(); i++){
        if (lista.get(i).getIdProduto()!=null){
          if(lista.get(i).getIdProduto().equals(id)){
            carrinhoRepository.deleteById(lista.get(i).getId());
          }
        }

      }
    }

    public void limpar(Integer idUsuario) {
      List<Carrinho> lista = this.listar(idUsuario);
      for(int i=0;i<lista.size();i++){
        carrinhoRepository.deleteById(lista.get(i).getId());
      }
    }


}
