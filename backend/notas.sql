-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-05-2021 a las 01:52:17
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `notas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notascreadas`
--

DROP TABLE IF EXISTS `notascreadas`;
CREATE TABLE `notascreadas` (
  `id` int(1) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `estado` int(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `notascreadas`
--

INSERT INTO `notascreadas` (`id`, `titulo`, `estado`, `descripcion`) VALUES
(22, 'Terminar proyecto de angular', 2, 'Aun faltan cosas que agregar :('),
(23, 'Terminar proyecto de angular II', 2, 'Falta arreglar página principal, solo dejar el botón actualizar e implementar la función de borrar y seleccionar en el componente visualizar notas'),
(24, 'Terminar proyecto de angular III', 2, 'Funciona perfectamente la función de eliminar y modificar ahora solo hay que implementarla en el otro componente y listoooooo'),
(25, 'Terminar proyecto de angular IV', 2, 'No tengo ni idea como hacer funcionar esto más allá de lo creado, no se me ocurre como darle un buen formato a las notas, y esto está fallandoooo'),
(28, 'Terminar proyecto de angular V', 2, 'Pude ver la validación de datos y es todo responsivooo hay progresooo'),
(29, 'Faltó lo siguiente I', 1, '- Crear y ordenar de forma correcta las notas, separadas por color/estado de la nota'),
(30, 'Faltó lo siguiente II', 1, '- Traspasar de manera correcta lo implementado en el componente formulariocrearnotas al complemento visualizar-notas'),
(31, 'Faltó lo siguiente III', 1, '- Traspasar las funciones eliminar y modificar en las notas de visualizar notas, estas se pudieron implementar pero no se aplicaron a lo esperado'),
(32, 'Faltó lo siguiente IV', 1, '- Corroborar que solo se puede editar en notas abiertas o en proceso'),
(34, 'Conclusión', 1, 'Aprendí harto del manejo de front end con back end, el trabajo individual es duro, los tiempos fueron adecuados');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `notascreadas`
--
ALTER TABLE `notascreadas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `notascreadas`
--
ALTER TABLE `notascreadas`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
