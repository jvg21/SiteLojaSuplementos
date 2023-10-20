SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DbProjetoMaromba
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DbProjetoMaromba` DEFAULT CHARACTER SET utf8 ;
USE `DbProjetoMaromba` ;

-- -----------------------------------------------------
-- Table `DbProjetoMaromba`.`Produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProjetoMaromba`.`Produto` (
  `idProduto` INT NOT NULL AUTO_INCREMENT,
  `nomeProduto` VARCHAR(45) NOT NULL,
  `valorProduto` VARCHAR(45) NOT NULL,
  `marcaProduto` VARCHAR(45) NOT NULL,
  `pesoProduto` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProduto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProjetoMaromba`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProjetoMaromba`.`Endereco` (
  `idEndereco` INT NOT NULL AUTO_INCREMENT,
  `nomeEndereco` VARCHAR(45) NOT NULL,
  `numeroEndereco` VARCHAR(45) NOT NULL,
  `bairroEndereco` VARCHAR(45) NOT NULL,
  `cepEndereco` VARCHAR(45) NOT NULL,
  `cidadeEndereco` VARCHAR(45) NOT NULL,
  `estadoEndereco` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEndereco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProjetoMaromba`.`Dados Bancarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProjetoMaromba`.`Dados Bancarios` (
  `idDadosBancarios` INT NOT NULL AUTO_INCREMENT,
  `numeroCartao` VARCHAR(45) NOT NULL,
  `nomeCartao` VARCHAR(45) NOT NULL,
  `vencimentoCartao` VARCHAR(45) NOT NULL,
  `cvvCartao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDadosBancarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProjetoMaromba`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProjetoMaromba`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nomeUsuario` VARCHAR(45) NOT NULL,
  `cpfUsuario` VARCHAR(45) NOT NULL,
  `emailUsuario` VARCHAR(45) NOT NULL,
  `telefoneUsuario` VARCHAR(45) NOT NULL,
  `loginUsuario` VARCHAR(45) NOT NULL,
  `senhaUsuario` VARCHAR(45) NOT NULL,
  `fk_idEndereco` INT NOT NULL,
  `fk_idDadosBancarios` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `loginUsuario_UNIQUE` (`loginUsuario` ASC) ,
  INDEX `fk_Usuario_Endereco_idx` (`fk_idEndereco` ASC) ,
  INDEX `fk_Usuario_Dados Bancarios1_idx` (`fk_idDadosBancarios` ASC) ,
  CONSTRAINT `fk_Usuario_Endereco`
    FOREIGN KEY (`fk_idEndereco`)
    REFERENCES `DbProjetoMaromba`.`Endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_Dados Bancarios1`
    FOREIGN KEY (`fk_idDadosBancarios`)
    REFERENCES `DbProjetoMaromba`.`Dados Bancarios` (`idDadosBancarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProjetoMaromba`.`Transportadora`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProjetoMaromba`.`Transportadora` (
  `idTransportadora` INT NOT NULL AUTO_INCREMENT,
  `nomeTransportadora` VARCHAR(45) NOT NULL,
  `telefoneTransportadora` VARCHAR(45) NOT NULL,
  `cnpfTransportadora` VARCHAR(45) NOT NULL,
  `situacaoTransportadora` VARCHAR(45) NOT NULL,
  `Transportadoracol` VARCHAR(45) NOT NULL,
  `Endereco_idEndereco` INT NOT NULL,
  PRIMARY KEY (`idTransportadora`),
  INDEX `fk_Transportadora_Endereco1_idx` (`Endereco_idEndereco` ASC) ,
  CONSTRAINT `fk_Transportadora_Endereco1`
    FOREIGN KEY (`Endereco_idEndereco`)
    REFERENCES `DbProjetoMaromba`.`Endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProjetoMaromba`.`Pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProjetoMaromba`.`Pedido` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `dataPedido` VARCHAR(45) NOT NULL,
  `enderecoPedido` VARCHAR(45) NOT NULL,
  `statusPedido` VARCHAR(45) NOT NULL,
  `dataEntregaPedido` VARCHAR(45) NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `Transportadora_idTransportadora` INT NOT NULL,
  PRIMARY KEY (`idPedido`),
  INDEX `fk_Pedido_Usuario1_idx` (`Usuario_idUsuario` ASC) ,
  INDEX `fk_Pedido_Transportadora1_idx` (`Transportadora_idTransportadora` ASC) ,
  CONSTRAINT `fk_Pedido_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `DbProjetoMaromba`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pedido_Transportadora1`
    FOREIGN KEY (`Transportadora_idTransportadora`)
    REFERENCES `DbProjetoMaromba`.`Transportadora` (`idTransportadora`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProjetoMaromba`.`Pedido_Produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProjetoMaromba`.`Pedido_Produto` (
  `fk_idPedido` INT NOT NULL,
  `fk_idProduto` INT NOT NULL,
  PRIMARY KEY (`fk_idPedido`, `fk_idProduto`),
  INDEX `fk_Pedido_has_Produto_Produto1_idx` (`fk_idProduto` ASC) ,
  INDEX `fk_Pedido_has_Produto_Pedido1_idx` (`fk_idPedido` ASC) ,
  CONSTRAINT `fk_Pedido_has_Produto_Pedido1`
    FOREIGN KEY (`fk_idPedido`)
    REFERENCES `DbProjetoMaromba`.`Pedido` (`idPedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pedido_has_Produto_Produto1`
    FOREIGN KEY (`fk_idProduto`)
    REFERENCES `DbProjetoMaromba`.`Produto` (`idProduto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
