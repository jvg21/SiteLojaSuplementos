package br.pucpr.exemplo.login.service;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import br.pucpr.exemplo.login.model.entity.Login;
import br.pucpr.exemplo.login.repository.LoginRepository;

import java.util.*;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login salvar(Login login) {
        excluir();
        return loginRepository.save(login);
    }

    public List<Login> listar() {
        return loginRepository.findAll();
    }

    public Login selecionar() {
      Login user = null;
      user = loginRepository.findAll().get(0);
      return user;
    }

    public void excluir() {
        loginRepository.deleteAll();
    }

}
