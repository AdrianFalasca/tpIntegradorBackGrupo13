-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-07-2025 a las 01:23:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp_autoservicio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` enum('filosofia','literatura') NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `category`, `price`) VALUES
(6, 'PLaton', 'https://images.cdn1.buscalibre.com/fit-in/360x360/1a/03/1a03fb7cc9418c30642937997d0eac61.jpg', 'filosofia', 10000.00),
(7, 'Aristoteles', 'https://contentv2.tap-commerce.com/cover/large/9788424939489_1.jpg?id_com=1156', 'filosofia', 12000.00),
(8, 'Seneca', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjQeJbPJy7345cfCsqGieEpFHfXNWSZAcJw&s', 'filosofia', 20300.00),
(9, 'Nietzsche', 'https://contralainercia.wordpress.com/wp-content/uploads/2019/10/mas-alla-del-bien-y-del-mal-friedrich-nietzsche-envio-gratis-d_nq_np_983515-mlm25265683480_012017-f.jpg?w=640', 'filosofia', 25000.00),
(10, 'Ovidio', 'https://images.cdn3.buscalibre.com/fit-in/360x360/a3/a3/a3a39b968995bf2e09f46e1921506dc8.jpg', 'filosofia', 5000.00),
(11, 'Jacques Rousseau', 'https://images.cdn3.buscalibre.com/fit-in/360x360/62/1d/621d56094877fa7a94af4751579e6883.jpg', 'filosofia', 20000.00),
(12, 'Tomas Hobbes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7vyppgghz-o4ea4Td81_CRgqstfp5nUTdg&s', 'filosofia', 15600.00),
(13, 'Jorge Luis Borges', 'https://http2.mlstatic.com/D_NQ_NP_727486-MLU75135944095_032024-O.webp', 'literatura', 8000.00),
(14, 'Julio Cortazar', 'https://acdn-us.mitiendanube.com/stores/001/029/689/products/rayuela1-70d4301f60dc01384c16171187155984-1024-1024.png', 'literatura', 17000.00),
(15, 'Mark Twain', 'https://http2.mlstatic.com/D_NQ_NP_742640-MLA51955189756_102022-O.webp', 'literatura', 10500.00),
(16, 'Franz Kafka', 'https://images.cdn1.buscalibre.com/fit-in/360x360/eb/46/eb462da7299989daa5722061c8b57473.jpg', 'literatura', 16000.00),
(17, 'Henry Thoreau', 'https://images.cdn1.buscalibre.com/fit-in/360x360/ab/7d/ab7d8088eb101ca764b7fbb3306b6cf3.jpg', 'filosofia', 12000.00),
(18, 'Juan Rulfo', 'https://images.cdn3.buscalibre.com/fit-in/520x520/4b/7e/4b7ee861b9f473b4dcd55bbea2893916.jpg', 'literatura', 10000.00),
(19, 'Garcia Marquez', 'https://images.cdn3.buscalibre.com/fit-in/360x360/b9/d5/b9d5d415d11423d0f9e98074ee6997d9.jpg', 'literatura', 12000.00),
(20, 'Mario Vargaz Llosa', 'https://images.cdn1.buscalibre.com/fit-in/360x360/eb/b7/ebb76f6074ad43a98da794664746a128.jpg', 'literatura', 18000.00),
(22, 'Platon', 'https://images.cdn1.buscalibre.com/fit-in/360x360/1a/03/1a03fb7cc9418c30642937997d0eac61.jpg', 'filosofia', 22500.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
