-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.11:3306
-- Generation Time: Dec 18, 2023 at 04:15 PM
-- Server version: 10.6.15-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u812261818_foodmarket`
--

-- --------------------------------------------------------

--
-- Table structure for table `balances`
--

CREATE TABLE `balances` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `balances`
--

INSERT INTO `balances` (`id`, `user_id`, `balance`) VALUES
(1, 5, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL DEFAULT 'user',
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `houseNumber` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `profile_photo_path` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `roles`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `address`, `houseNumber`, `phoneNumber`, `city`, `created_at`, `updated_at`, `profile_photo_path`) VALUES
(1, 'admin', 'admin@admin.com', '2021-09-23 14:37:45', '$2y$10$dVRbkEr3U3ZEef9F.9xBtOaIZZCWlU3ogcRFEsVzoxS/.t.x/gK1G', 'USER', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-09-23 14:37:45', '2021-09-23 14:37:45', NULL),
(2, 'Putri', 'Huriatiputri@gmail.com', NULL, '$2y$10$EqBpk6.qkY477T5eT0.1F./lOFRFef/6uaT3/8nv.88W2pT2KSgAW', 'USER', NULL, NULL, NULL, NULL, 'Jln.hamka', '56', '083180091841', 'Jakarta', '2021-09-23 16:40:57', '2021-09-23 16:40:57', NULL),
(3, 'putri', 'putri@yopmail.com', NULL, '123456', 'user', NULL, NULL, NULL, NULL, 'padang', '28', '08789090900', 'Surabaya', '2021-12-03 09:49:43', '2021-12-03 09:49:45', 'assets/user/9Pq8NxXPwxo1GjgjL7eLV8XpcYSzIT8jA7hLctba.jpeg'),
(5, 'putri', 'putrii@yopmail.com', NULL, '$2b$10$cxhs2sODjzbfDwoBm0nVWOl7m9wS/kmpHEA1zbBcu1MGh6qqkLVHi', 'user', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `balances`
--
ALTER TABLE `balances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `balances`
--
ALTER TABLE `balances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
