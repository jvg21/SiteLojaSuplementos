package br.pucpr.exemplo.pedido.service;

import br.pucpr.exemplo.pedido.model.entity.Pedido;
import br.pucpr.exemplo.pedido.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class PedidoService {

  @Autowired
  private PedidoRepository PedidoRepository;

  public Pedido salvar(Pedido ped) {
    return PedidoRepository.save(ped);
  }

  public List<Pedido> listar() {
    return PedidoRepository.findAll();
  }

  public Pedido selecionar(Integer id) {
    Pedido pedido = null;
    if (PedidoRepository.findById(id).isPresent()) {
      pedido = PedidoRepository.findById(id).get();
    }
    return pedido;
  }

  public Pedido atualizar(Integer id, Pedido ped) {

    if (PedidoRepository.findById(id).isPresent()) {
      Pedido pedido = PedidoRepository.findById(id).get();

      if (Objects.nonNull(ped.getData()) && !"".equalsIgnoreCase(ped.getData())) {
        pedido.setData(ped.getData());
      }
      if (Objects.nonNull(ped.getDatadataEntrega()) && !"".equalsIgnoreCase(ped.getDatadataEntrega())) {
        pedido.setDatadataEntrega(ped.getDatadataEntrega());
      }
      if (Objects.nonNull(ped.getStatus()) && !"".equalsIgnoreCase(ped.getStatus())) {
        pedido.setStatus(ped.getStatus());
      }

      if (Objects.nonNull(ped.getValor())) {
        pedido.setValor(ped.getValor());
      }
      pedido.setIdCliente(ped.getIdCliente());
      pedido.setIdTransportadora(ped.getIdTransportadora());
      pedido.setAtivado(ped.isAtivado());

      return PedidoRepository.save(pedido);
    }
    return null;
  }

  public void excluir(Integer id) {
    PedidoRepository.deleteById(id);
  }
}