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

    public Transportadora salvar(Transportadora transportadora) {
        return TransportadoraRepository.save(transportadora);
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

    public Transportadora atualizar(Integer id, Transportadora transportadora){

        if (TransportadoraRepository.findById(id).isPresent()){
          Transportadora user = TransportadoraRepository.findById(id).get();

          if (Objects.nonNull(transportadora.getCnpj()) && !"".equalsIgnoreCase(transportadora.getCnpj())) {
            user.setCnpj(transportadora.getCnpj());
          }
          if (Objects.nonNull(transportadora.getEmail()) && !"".equalsIgnoreCase(transportadora.getEmail())) {
            user.setEmail(transportadora.getEmail());
          }
          if (Objects.nonNull(transportadora.getNome()) && !"".equalsIgnoreCase(transportadora.getNome())) {
            user.setNome(transportadora.getNome());
          }
          user.setAtivado(transportadora.isAtivado());


          return TransportadoraRepository.save(user);
    }
      return null;
    }
    public void excluir(Integer id) {
        TransportadoraRepository.deleteById(id);
    }
}
