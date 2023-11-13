package br.pucpr.exemplo.login.repository;

import org.springframework.data.jpa.repository.*;

import br.pucpr.exemplo.login.model.entity.Login;

public interface LoginRepository extends JpaRepository<Login,Integer> {
}
