package br.pucpr.exemplo.cliente.controller;

import br.pucpr.exemplo.cliente.model.*;
import br.pucpr.exemplo.cliente.model.entity.*;
import br.pucpr.exemplo.cliente.service.*;
import jakarta.validation.*;
import org.modelmapper.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.*;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    private ModelMapper modelMapper = new ModelMapper();;

    @PostMapping
    public ResponseEntity<ClienteDTO> salvar(@Valid @RequestBody ClienteDTO clienteDTO) {
        Cliente cliente = this.modelMapper.map(clienteDTO, Cliente.class);
        clienteService.salvar(cliente);
        return new ResponseEntity(clienteDTO, HttpStatus.CREATED);
    }

    @GetMapping
    public List<ClienteDTO> listar() {
        List<Cliente> clientes = clienteService.listar();
        return clientes.stream().map(cliente -> modelMapper.map(cliente, ClienteDTO.class)).
                collect(Collectors.toList());
    }

    @DeleteMapping
    public void excluir(Integer id) {
    }

}
