-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jan 2025 pada 08.24
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_covid_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `status` enum('active','recovered','deceased') NOT NULL,
  `in_date_at` date NOT NULL,
  `out_date_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`) VALUES
(2, 'John Doe', '081234567890', '123 Main St, Jakarta', 'active', '2025-01-01', NULL),
(3, 'Jane Smith', '082345678901', '456 Oak Ave, Surabaya', 'recovered', '2024-12-15', '2025-01-10'),
(4, 'Alice Johnson', '083456789012', '789 Pine Rd, Bandung', 'deceased', '2024-11-20', '2024-12-01'),
(5, 'Bob Brown', '084567890123', '101 Maple Dr, Bali', 'active', '2025-01-05', NULL),
(6, 'Charlie White', '085678901234', '202 Birch Ln, Medan', 'recovered', '2024-12-10', '2025-01-02');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
