package br.pucpr.exemplo.transportadora.service;

import br.pucpr.exemplo.transportadora.model.entity.Transportadora;
import br.pucpr.exemplo.transportadora.repository.TransportadoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class TransportadpraService {

    @Autowired
    private TransportadoraRepository TransportadoraRepository;

    public Transportadora salvar(Transportadora usuario) {
        return TransportadoraRepository.save(usuario);
    }

    public List<Transportadora> listar() {
        return TransportadoraRepository.findAll();
    }

    public Transportadora selecionar(Integer id) {
      Transportadora user = null;
      if (TransportadoraRepository.findById(id).isPresent()) {
        user = TransportadoraRepository.findById(id).get();
      }
      return user;
    }

    public Transportadora atualizar(Integer id, Transportadora usuario){

        if (TransportadoraRepository.findById(id).isPresent()){
          Transportadora user = TransportadoraRepository.findById(id).get();

          if (Objects.nonNull(usuario.getCnpj()) && !"".equalsIgnoreCase(usuario.getCnpj())) {
            user.setCnpj(usuario.getCnpj());
          }
          if (Objects.nonNull(usuario.getEmail()) && !"".equalsIgnoreCase(usuario.getEmail())) {
            user.setEmail(usuario.getEmail());
          }
          if (Objects.nonNull(usuario.getNome()) && !"".equalsIgnoreCase(usuario.getNome())) {
            user.setNome(usuario.getNome());
          }


          return TransportadoraRepository.save(user);
    }
      return null;
    }
    public void excluir(Integer id) {
        TransportadoraRepository.deleteById(id);
    }
}
