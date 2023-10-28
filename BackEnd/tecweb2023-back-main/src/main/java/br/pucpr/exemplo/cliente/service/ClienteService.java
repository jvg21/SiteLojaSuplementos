package br.pucpr.exemplo.cliente.service;

import br.pucpr.exemplo.cliente.model.*;
import br.pucpr.exemplo.cliente.model.entity.*;
import br.pucpr.exemplo.cliente.repository.*;
import jakarta.validation.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }

    public void excluir(Integer id) {
        clienteRepository.deleteById(id);
    }


}
