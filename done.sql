-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 01:21 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `done`
--

-- --------------------------------------------------------

--
-- Table structure for table `avatar`
--

CREATE TABLE `avatar` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `avatar`
--

INSERT INTO `avatar` (`id`, `name`, `image`) VALUES
(3, 'User3', 0x5c7075626c69635c696d616765735c313637333631383834383531332d50726f66696c65506963312e6a7067);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `task_name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `task_status_id` int(11) NOT NULL,
  `task_date` date NOT NULL DEFAULT current_timestamp(),
  `task_time` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `task_name`, `description`, `task_status_id`, `task_date`, `task_time`) VALUES
(76, 'Mocha and Chai UPDATE Test', 'Description UPDATE TEST', 1, '2023-01-15', '13:00:00'),
(123, 'Going for walk', 'Walking is important', 1, '2023-01-16', '10:42:00'),
(124, 'Go to Gym', 'go to gym in the moring', 3, '2023-01-16', '09:15:00'),
(125, 'Visit Family', 'Visit Cousin', 2, '2023-01-16', '10:15:00'),
(126, 'Assignment Due', 'Complete Level 6 Web Application ', 2, '2023-01-17', '14:00:00'),
(127, 'Mocha and Chai POST Test', 'Description TEST', 1, '2023-01-15', '13:00:00'),
(128, 'Mocha and Chai POST Test', 'Description TEST', 1, '2023-01-15', '13:00:00'),
(129, 'Mocha and Chai POST Test', 'Description TEST', 1, '2023-01-15', '13:00:00'),
(131, 'Mocha and Chai POST Test', 'Description TEST', 1, '2023-01-15', '13:00:00'),
(132, 'Mocha and Chai POST Test', 'Description TEST', 1, '2023-01-15', '13:00:00'),
(133, 'Mocha and Chai POST Test', 'Description TEST', 1, '2023-01-15', '13:00:00'),
(135, 'Mocha and Chai POST Test', 'Description TEST', 1, '2023-01-15', '13:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `task_status`
--

CREATE TABLE `task_status` (
  `id` int(11) NOT NULL,
  `priority` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task_status`
--

INSERT INTO `task_status` (`id`, `priority`) VALUES
(1, 'Low'),
(2, 'Medium'),
(3, 'High');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_status_id` (`task_status_id`);

--
-- Indexes for table `task_status`
--
ALTER TABLE `task_status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avatar`
--
ALTER TABLE `avatar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `task_status`
--
ALTER TABLE `task_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_status_id` FOREIGN KEY (`task_status_id`) REFERENCES `task_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
