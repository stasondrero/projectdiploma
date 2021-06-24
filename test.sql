-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Чрв 24 2021 р., 17:40
-- Версія сервера: 10.4.14-MariaDB
-- Версія PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `test`
--

-- --------------------------------------------------------

--
-- Структура таблиці `main_info`
--

CREATE TABLE `main_info` (
  `id` int(3) NOT NULL,
  `orderdate` date NOT NULL,
  `ordertime` time NOT NULL,
  `countHours` int(2) NOT NULL,
  `numberTable` int(1) NOT NULL,
  `revenue` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_estonian_ci;

--
-- Дамп даних таблиці `main_info`
--

INSERT INTO `main_info` (`id`, `orderdate`, `ordertime`, `countHours`, `numberTable`, `revenue`) VALUES
(1, '2021-06-23', '21:00:34', 1, 1, 100);

-- --------------------------------------------------------

--
-- Структура таблиці `tableorders`
--

CREATE TABLE `tableorders` (
  `id` int(3) NOT NULL,
  `orderdate` int(30) NOT NULL,
  `ordertime` int(6) NOT NULL,
  `tablenumber` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблиці `tablestatistics`
--

CREATE TABLE `tablestatistics` (
  `id` int(3) NOT NULL,
  `ordercount` int(5) NOT NULL,
  `revenue` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `main_info`
--
ALTER TABLE `main_info`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `tableorders`
--
ALTER TABLE `tableorders`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `tablestatistics`
--
ALTER TABLE `tablestatistics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `main_info`
--
ALTER TABLE `main_info`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблиці `tableorders`
--
ALTER TABLE `tableorders`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблиці `tablestatistics`
--
ALTER TABLE `tablestatistics`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
