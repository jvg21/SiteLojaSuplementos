package br.pucpr.exemplo.transportadora.controller;


import br.pucpr.exemplo.transportadora.model.TransportadoraDTO;
import br.pucpr.exemplo.transportadora.model.entity.Transportadora;
import br.pucpr.exemplo.transportadora.service.TransportadpraService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
public class TransportadoraController {

    @Autowired
    private TransportadpraService transportadpraService;
    private ModelMapper modelMapper = new ModelMapper();;
    @PostMapping("/transportadora/criar")
    public ResponseEntity<TransportadoraDTO> salvar(@Valid @RequestBody TransportadoraDTO TransportadoraDTO) {
        Transportadora transportadora = this.modelMapper.map(TransportadoraDTO, Transportadora.class);
        transportadpraService.salvar(transportadora);
        return new ResponseEntity(TransportadoraDTO, HttpStatus.CREATED);
    }

    @GetMapping("/transportadora/listar")
    public List<TransportadoraDTO> listar() {
        List<Transportadora> transportadoras = transportadpraService.listar();
        return transportadoras.stream().map(transportadora -> modelMapper.map(transportadora, TransportadoraDTO.class)).
                collect(Collectors.toList());
    }

    @GetMapping("/transportadora/selecionar/{idTransportadora}")
      public Transportadora selecionar(@PathVariable int idTransportadora){
      return transportadpraService.selecionar(idTransportadora);
    }
    @DeleteMapping("/transportadora/excluir/{idTransportadora}")
    public String deletar(@PathVariable int idTransportadora){
      transportadpraService.excluir(idTransportadora);
      return "Transportadora Deletada";
    }

    @PutMapping("/transportadora/atualizar/{idTransportadora}")
    public Transportadora atualizar(@PathVariable int idTransportadora, @Valid @RequestBody TransportadoraDTO TransportadoraDTO){
      Transportadora transportadora = this.modelMapper.map(TransportadoraDTO, Transportadora.class);
      return transportadpraService.atualizar(idTransportadora,transportadora);
    }
}
