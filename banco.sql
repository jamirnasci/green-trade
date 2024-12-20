-- MySQL Script generated by MySQL Workbench
-- Tue Oct 22 17:26:31 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema greentrade
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema greentrade
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `greentrade` DEFAULT CHARACTER SET utf8 ;
USE `greentrade` ;

-- -----------------------------------------------------
-- Table `greentrade`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `greentrade`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `idade` INT NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `cep` VARCHAR(8) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE,
  UNIQUE INDEX `idade_UNIQUE` (`idade` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `greentrade`.`plantas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `greentrade`.`plantas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `idade` INT NOT NULL,
  `condicao` VARCHAR(45) NOT NULL,
  `tamanho` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `usuarios_id` INT NOT NULL,
  `descricao` MEDIUMTEXT NOT NULL,
  `imagem` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_plantas_usuarios_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_plantas_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `greentrade`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `greentrade`.`historico_trocas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `greentrade`.`historico_trocas` (
  `id` INT NOT NULL,
  `usuarios_id` INT NOT NULL,
  `plantas_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_historico_trocas_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  INDEX `fk_historico_trocas_plantas1_idx` (`plantas_id` ASC) VISIBLE,
  CONSTRAINT `fk_historico_trocas_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `greentrade`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_historico_trocas_plantas1`
    FOREIGN KEY (`plantas_id`)
    REFERENCES `greentrade`.`plantas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
