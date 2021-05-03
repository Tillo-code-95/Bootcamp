-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-05-2021 a las 22:35:35
-- Versión del servidor: 8.0.23-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mi_restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mis_empleados`
--

CREATE TABLE `mis_empleados` (
  `name` varchar(32) NOT NULL,
  `dni` varchar(32) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `position` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `mis_empleados`
--

INSERT INTO `mis_empleados` (`name`, `dni`, `phone`, `position`) VALUES
('John Smith', '546545454E', '658796321', 'Camarero de sala'),
('Loren Port', '778541214R', '789561511', 'Gerente'),
('Matheu Thompson', '77896325Y', '789635211', 'Cocinero');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos`
--

CREATE TABLE `platos` (
  `Plato` varchar(32) NOT NULL,
  `Tipo de plato` varchar(32) NOT NULL,
  `Precio` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `platos`
--

INSERT INTO `platos` (`Plato`, `Tipo de plato`, `Precio`) VALUES
('Sopa de picatoste', 'Primero', '3.50'),
('Escalopines con patatas', 'Segundo', '4.50'),
('Presa Iberica con verduras', 'Segundo', '5.00'),
('GinTonic', 'Postre', '5.50');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
