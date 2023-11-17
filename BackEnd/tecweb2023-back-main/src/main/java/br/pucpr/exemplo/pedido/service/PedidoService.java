package br.pucpr.exemplo.pedido.service;

import br.pucpr.exemplo.pedido.model.entity.Pedido;
import br.pucpr.exemplo.pedido.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class PedidoService {

  @Autowired
  private PedidoRepository pedidoRepository;

  public Pedido salvar(Pedido pedido) {
    return pedidoRepository.save(pedido);
  }

  public List<Pedido> listar(Integer idUsuario) {
    List<Pedido> lista = pedidoRepository.findAll();
    List<Pedido> listaReturn = new ArrayList<>();
    for (int i = 0; i < lista.size(); i++) {
      if (lista.get(i).getIdCliente() != null) {
        if (lista.get(i).getIdCliente().equals(idUsuario)) {
          listaReturn.add(lista.get(i));
        }
      }
    }

    return listaReturn;
  }

  public List<Pedido> listarAll() {
    return pedidoRepository.findAll();
  }

  public Pedido entrega(Integer id) {

    LocalDate currentDate = LocalDate.now();
    // Criar um formatador para o formato desejado
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    // Formatando a data
    String formattedDate = currentDate.format(formatter);

    if (pedidoRepository.findById(id).isPresent()) {
      Pedido pedido = pedidoRepository.findById(id).get();
      pedido.setEntrega("Pedido Entregue: "+formattedDate);
      return pedidoRepository.save(pedido);
    }
    return null;
  }

  public void excluir(Integer id) {
    pedidoRepository.deleteById(id);
  }

  public void limpar(Integer idUsuario) {
    List<Pedido> lista = this.listar(idUsuario);
    for (int i = 0; i < lista.size(); i++) {
      pedidoRepository.deleteById(lista.get(i).getId());
    }
  }

}
