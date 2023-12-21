-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 21, 2023 at 09:35 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apiapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int NOT NULL,
  `login` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `login`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2a$10$UlJwEAKqNCK5Km.riygACOxn/KNKtxm/GSwLQijg3QnX0opmOskZW', '2023-12-19 16:10:49', '2023-12-19 16:10:49'),
(3, 'admin1', '$2a$10$PrlLe.4kTsJq9lx68DJXuekIC11FNqp9fOrywR0Vo4CYOmVQROBn2', '2023-12-19 16:14:20', '2023-12-19 16:14:20');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publish_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `author`, `publish_date`, `created_at`, `updated_at`) VALUES
(1, 'Voluptatibus numquam dolorem omnis explicabo quasi sint nemo quia.', 'Eded Cartwrighte', '2007-08-17', '2023-12-11 13:41:02', '2023-12-13 15:40:38'),
(2, 'Placeat consequatur molestiae voluptatum soluta quia.', 'Barrett Stroman', '1970-07-17', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(3, 'In sit aspernatur recusandae.', 'Queenie O\'Keefe', '2004-01-07', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(4, 'Distinctio sapiente voluptas molestias in libero occaecati animi.', 'Luis O\'Hara', '1970-07-17', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(5, 'NewQuo nihil occaecati dolores excepturi corrupti et.', 'New Colleen Miller MD', '1996-10-15', '2023-12-11 13:41:02', '2023-12-11 15:22:36'),
(6, 'Nam omnis eum voluptas odio.', 'Addison Lakin', '1995-08-30', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(7, 'Tempore aut sint ut necessitatibus.', 'Dexter Hill', '1985-03-08', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(8, 'Dicta consectetur magni id non impedit doloribus.', 'Lexi Reichel', '2016-02-18', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(9, 'Tenetur quas quo et quis autem sint.', 'Vito Ernser', '1994-04-13', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(10, 'Cum et officiis aut neque sunt libero consequatur.', 'Prof. Karl Boyer I', '1995-12-21', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(11, 'Voluptatem delectus nostrum aut aspernatur quia.', 'Dr. Tremaine Jaskolski II', '1983-05-02', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(12, 'Repellendus aperiam nisi quod iure.', 'Ayla Spencer', '1979-03-16', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(13, 'Debitis fugiat sunt eum rem rem iste.', 'Isabella Gleichner', '2006-12-31', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(14, 'Aut inventore enim eveniet id in voluptas.', 'Betsy Bednar', '1977-03-22', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(15, 'Voluptatem earum possimus dignissimos.', 'Miss Jazmyne Crona', '2002-12-28', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(16, 'Iste accusantium qui perspiciatis commodi ea.', 'Luz Crooks', '2007-08-16', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(17, 'Omnis voluptatem tempore velit necessitatibus est.', 'Ms. Minerva Bailey', '1982-06-15', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(18, 'Impedit assumenda et illum omnis eos quia porro.', 'Dr. Concepcion Altenwerth', '1991-10-29', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(19, 'Alias nostrum recusandae sapiente est ad.', 'Eloisa Lueilwitz', '2015-11-22', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(20, 'Aperiam ea perspiciatis quia molestias.', 'Curt Buckridge', '1991-07-28', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(21, 'Qui facere ut eum dolore iure sequi ipsa.', 'Erich Sporer', '2014-08-29', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(22, 'Dicta est provident sapiente rem ducimus quis.', 'Dr. Leonora Hoppe', '1984-08-20', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(23, 'Magnam blanditiis et libero dolor.', 'Elian Kulas', '1990-04-08', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(24, 'Nihil omnis aut ad est cum.', 'Alexandria Kohler', '1981-09-10', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(25, 'Labore quae inventore totam quod minus.', 'Miss Lisette Stark II', '1983-03-01', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(26, 'Ipsum rerum sint suscipit pariatur nemo.', 'Isaac O\'Conner', '1987-08-31', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(27, 'Qui porro veritatis et explicabo nihil occaecati fuga.', 'Bernita Kerluke', '2019-03-04', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(28, 'Error quaerat aliquam illo cupiditate sit provident.', 'Margret Rath', '1988-04-11', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(29, 'Tempora voluptatem reiciendis dolor pariatur dignissimos est quis.', 'Prof. Declan Lindgren', '1983-11-27', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(30, 'Veritatis blanditiis adipisci vitae non corporis amet sed vel.', 'Lucius Buckridge', '2010-12-23', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(31, 'Maxime officia quo et maxime.', 'Sigmund Harber', '1999-02-20', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(32, 'Vitae velit sapiente et voluptatem tempora hic.', 'Opal Wolf', '2008-02-17', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(33, 'Dolor ipsam iure illo et vitae animi blanditiis.', 'Lonny D\'Amore III', '1979-01-11', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(34, 'Est commodi odit quo dicta eos dolor et.', 'Prof. Adrain Rowe MD', '2008-05-14', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(35, 'Fugiat ratione et iusto veniam pariatur maiores.', 'Flo Beahan', '2023-10-04', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(36, 'Cumque officia aut eligendi possimus dolore at.', 'Mrs. Tressie Rau II', '2017-08-27', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(37, 'Deleniti fuga eius recusandae eligendi autem rerum quas.', 'Miss Lue Donnelly', '1978-08-18', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(38, 'Repellendus libero veritatis velit nostrum eligendi ut.', 'Anya Armstrong', '1987-11-29', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(39, 'Suscipit et qui est ut saepe quaerat labore.', 'Baby Moen', '2017-01-21', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(40, 'Natus accusamus possimus iure et sed.', 'Jamie Gerlach', '2010-08-22', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(41, 'In doloribus non ipsam.', 'Katlyn Kshlerin', '2011-02-01', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(42, 'Iure dignissimos tempora eveniet nihil quidem laboriosam cum.', 'Tressa Johnston', '2019-01-05', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(43, 'Asperiores deleniti quidem qui rem laudantium necessitatibus autem.', 'Myrtis Witting', '1976-03-16', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(44, 'Magni porro quod deleniti.', 'Abraham Price', '2005-08-03', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(45, 'Sed doloribus magni ducimus quaerat.', 'Mitchel Larson', '2019-12-29', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(46, 'Enim et aliquid nulla.', 'Milan Harvey', '2023-09-22', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(47, 'Totam iure labore vero est sapiente.', 'Leda Kilback Sr.', '1995-10-27', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(48, 'Molestiae nostrum unde et iusto.', 'Kendra Bernhard', '2011-12-18', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(49, 'Eius quisquam et quo aut sit enim.', 'Myrtis Huels', '1985-03-30', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(50, 'Et odit aut quam ut.', 'Moises Johnson', '1987-12-17', '2023-12-11 13:41:02', '2023-12-11 13:41:02'),
(52, 'Lorem ispum lorem', 'Mose Hills', '2019-09-19', '2023-12-11 15:06:47', '2023-12-11 15:06:47');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int NOT NULL,
  `session_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `session_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(15, 'Bearer adee3edb-7020-4e23-a6ad-d28828f11cda', 21, 1, '2023-12-20 15:32:05', '2023-12-20 15:32:05');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'cpu', '2023-12-17 08:30:33', '2023-12-19 14:46:43'),
(2, 'mothetboard', '2023-12-17 08:31:00', '2023-12-17 08:31:00'),
(3, 'ram', '2023-12-17 08:31:09', '2023-12-17 08:31:09'),
(4, 'gpu', '2023-12-17 08:31:15', '2023-12-17 08:31:15');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int NOT NULL,
  `name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Володимир', 'vovan2828@gmail.com', 'Класний у вас магазин!', '2023-12-21 15:30:33', '2023-12-21 15:30:33');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'item1', '2023-12-10 08:44:50', '2023-12-10 08:44:50'),
(2, 'item2', '2023-12-10 08:44:50', '2023-12-10 08:44:50'),
(3, 'item3', '2023-12-10 08:44:50', '2023-12-10 08:44:50'),
(4, 'item4', '2023-12-10 08:44:50', '2023-12-10 08:44:50');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_12_11_161949_create_books_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, NULL, '2023-12-20 17:38:25', '2023-12-20 17:38:25');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 29, 2, '110.00', '2023-12-20 17:38:25', '2023-12-20 18:21:25'),
(2, 1, 22, 1, '200.00', '2023-12-20 17:38:25', '2023-12-20 17:38:25');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `main_img` varchar(255) NOT NULL,
  `second_img` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category_id` int NOT NULL,
  `status_id` int NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `main_img`, `second_img`, `description`, `category_id`, `status_id`, `created_at`, `updated_at`) VALUES
(20, 'Intel Core I7', 300, 'corei7_2.webp', 'corei7_1.jpg', 'Intel Core i7-12700KF (BX8071512700KF) - один з найбільш збалансованих і просунутих процесорів з представленої в четвертому кварталі 2021 лінійки рішень 12-го покоління під кодовою назвою Alder Lake. Він отримав гібридну архітектуру, покращений техпроцес та підтримку оперативної пам\'яті DDR5. Intel Core i7-12700KF (BX8071512700KF) виготовляється відповідно до норм оптимізованої технології виробництва Intel 7. Гібридна архітектура має на увазі наявність 12 ядер: 8 стандартних і 4 енергоефективних. Загальна кількість потоків дорівнює 20. Базова тактова частота процесора становить 3,6 ГГц, а максимальна в режимі Turbo Boost досягає позначки 5 ГГц. Для малих ядер показники дорівнюють 2,7 і 3,8 ГГц відповідно. Особливістю Intel Core i7-12700KF (BX8071512700KF) крім розблокованого множника є ще й відсутність вбудованої графічної системи, завдяки чому зменшено нагрівання чіпа, а також відкрито значно більший простір для ентузіастів у розгоні процесора.', 1, 1, '2023-12-17 18:54:33', '2023-12-20 13:18:26'),
(21, 'Intel Core I3', 150, 'corei3_1.webp', 'corei3_2.webp', 'Новий процесор Intel Core i3-10105 10-го покоління, з кодовою назвою мікроархітектури Comet Lake. Призначений для настільної платформи Intel LGA 1200. Належить до сімейства високопродуктивних процесорів Core i3.\r\n\r\nIntel Core i3-10105 виробляється за стандартом 14-нм техпроцесу, має 4 ядра, які працюють у 8 потоків зі штатною тактовою частотою 3.7 ГГц, 4.4 ГГц у режимі Turbo Boost. Обсяг кеш-пам\'яті 3 рівня становить 6 МБ. Має 2-канальний контролер пам\'яті DDR4.', 1, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(22, 'Intel Core I5', 200, 'corei5_1.webp', 'corei5_2.webp', 'Новий процесор Intel Core i5-10400F 10-го покоління, з кодовою назвою мікроархітектури Comet Lake. Призначений для настільної платформи Intel LGA 1200. Належить до сімейства високопродуктивних процесорів Core i5.\r\n\r\nIntel Core i5-10400F виготовляється за стандартом 14-нм техпроцесу, має 6 ядер, які працюють у 12 потоків зі штатною тактовою частотою 2.9 ГГц, 4.3 ГГц у режимі Turbo Boost. Місткість кеш-пам\'яті 3-го рівня дорівнює 12 МБ. Має 2-канальний контролер пам\'яті DDR4.', 1, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(23, 'Intel Core I9', 500, 'corei9_1.webp', 'corei9_2.webp', 'Процесор Intel Core i9-11900K 11-го покоління для настільних ПК. Підтримка технологій Intel Turbo Boost Max 3.0 і PCIe Gen 4.0, процесор Intel Core 11-го покоління для настільних ПК із розблокованим множником оптимізовані для ентузіастів-геймерів і серйозних творців і допомагають забезпечити високу продуктивність під час розгону для додаткового прискорення. Сумісність із материнськими платами на базі чипсетів серії 500.', 1, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(24, 'Asus ROG B760-F', 300, 'mb1.webp', 'mb2.webp', 'Всестороння продуктивність\r\nЗавдяки потужному VRM та масивним радіаторам ROG Strix B760-F готовий до роботи з будь-яким чіпом лінійки Intel 13-го покоління. Підключені пристрої також можуть працювати з неймовірною швидкістю завдяки величезній пропускній здатності PCIe\r\n\r\nЕнергетична архітектура\r\n16 + 1 каскадів живлення, кожен з яких розрахований на 60 А, забезпечують достатній струм, щоб з легкістю керувати найпотужнішими процесорами Intel 13-го покоління при будь-яких робочих навантаженнях.\r\n\r\nДросельні дроселі та міцні конденсатори\r\nВисокоякісні дроселі та довговічні конденсатори спроєктовані так, щоб витримувати екстремальні температури, забезпечуючи продуктивність, що перевищує галузеві стандарти.\r\n\r\nВедучий зв\'язок\r\nНадплавне мережне з\'єднання, широка смуга пропускання USB та імерсивний звук — все це разом дає ROG Strix B760- F надійний пакет підключення.', 2, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(25, 'Asus ROG Z790', 550, 'mb1.webp', 'mb2.webp', 'Всестороння продуктивність\r\nЗавдяки потужному VRM та масивним радіаторам ROG Strix B760-F готовий до роботи з будь-яким чіпом лінійки Intel 13-го покоління. Підключені пристрої також можуть працювати з неймовірною швидкістю завдяки величезній пропускній здатності PCIe\r\n\r\nЕнергетична архітектура\r\n16 + 1 каскадів живлення, кожен з яких розрахований на 60 А, забезпечують достатній струм, щоб з легкістю керувати найпотужнішими процесорами Intel 13-го покоління при будь-яких робочих навантаженнях.\r\n\r\nДросельні дроселі та міцні конденсатори\r\nВисокоякісні дроселі та довговічні конденсатори спроєктовані так, щоб витримувати екстремальні температури, забезпечуючи продуктивність, що перевищує галузеві стандарти.\r\n\r\nВедучий зв\'язок\r\nНадплавне мережне з\'єднання, широка смуга пропускання USB та імерсивний звук — все це разом дає ROG Strix B760- F надійний пакет підключення.', 2, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(26, 'Asus PRIME Z790-A', 350, 'mb1.webp', 'mb2.webp', 'Всестороння продуктивність\r\nЗавдяки потужному VRM та масивним радіаторам ROG Strix B760-F готовий до роботи з будь-яким чіпом лінійки Intel 13-го покоління. Підключені пристрої також можуть працювати з неймовірною швидкістю завдяки величезній пропускній здатності PCIe\r\n\r\nЕнергетична архітектура\r\n16 + 1 каскадів живлення, кожен з яких розрахований на 60 А, забезпечують достатній струм, щоб з легкістю керувати найпотужнішими процесорами Intel 13-го покоління при будь-яких робочих навантаженнях.\r\n\r\nДросельні дроселі та міцні конденсатори\r\nВисокоякісні дроселі та довговічні конденсатори спроєктовані так, щоб витримувати екстремальні температури, забезпечуючи продуктивність, що перевищує галузеві стандарти.\r\n\r\nВедучий зв\'язок\r\nНадплавне мережне з\'єднання, широка смуга пропускання USB та імерсивний звук — все це разом дає ROG Strix B760- F надійний пакет підключення.', 2, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(27, 'MSI MPG Z790 CARBON', 400, 'mb1.webp', 'mb2.webp', 'Всестороння продуктивність\r\nЗавдяки потужному VRM та масивним радіаторам ROG Strix B760-F готовий до роботи з будь-яким чіпом лінійки Intel 13-го покоління. Підключені пристрої також можуть працювати з неймовірною швидкістю завдяки величезній пропускній здатності PCIe\r\n\r\nЕнергетична архітектура\r\n16 + 1 каскадів живлення, кожен з яких розрахований на 60 А, забезпечують достатній струм, щоб з легкістю керувати найпотужнішими процесорами Intel 13-го покоління при будь-яких робочих навантаженнях.\r\n\r\nДросельні дроселі та міцні конденсатори\r\nВисокоякісні дроселі та довговічні конденсатори спроєктовані так, щоб витримувати екстремальні температури, забезпечуючи продуктивність, що перевищує галузеві стандарти.\r\n\r\nВедучий зв\'язок\r\nНадплавне мережне з\'єднання, широка смуга пропускання USB та імерсивний звук — все це разом дає ROG Strix B760- F надійний пакет підключення.', 2, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(28, 'MSI MPG Z690 CARBON', 380, 'mb1.webp', 'mb2.webp', 'Всестороння продуктивність\r\nЗавдяки потужному VRM та масивним радіаторам ROG Strix B760-F готовий до роботи з будь-яким чіпом лінійки Intel 13-го покоління. Підключені пристрої також можуть працювати з неймовірною швидкістю завдяки величезній пропускній здатності PCIe\r\n\r\nЕнергетична архітектура\r\n16 + 1 каскадів живлення, кожен з яких розрахований на 60 А, забезпечують достатній струм, щоб з легкістю керувати найпотужнішими процесорами Intel 13-го покоління при будь-яких робочих навантаженнях.\r\n\r\nДросельні дроселі та міцні конденсатори\r\nВисокоякісні дроселі та довговічні конденсатори спроєктовані так, щоб витримувати екстремальні температури, забезпечуючи продуктивність, що перевищує галузеві стандарти.\r\n\r\nВедучий зв\'язок\r\nНадплавне мережне з\'єднання, широка смуга пропускання USB та імерсивний звук — все це разом дає ROG Strix B760- F надійний пакет підключення.', 2, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(29, 'Kingston Fury DDR4-3600 2x16gb', 100, 'ozu1.webp', 'ozu2.webp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 3, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(30, 'Kingston Fury DDR4-3600 Beast', 110, 'ozu1.webp', 'ozu2.webp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 3, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(31, 'G.Skill DDR4-4400 Trident Z 2x16gb', 150, 'ozu1.webp', 'ozu2.webp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 3, 2, '2023-12-17 19:01:44', '2023-12-17 19:01:44'),
(32, 'MSI RTX 4060 Ti Gaming X', 450, 'gpu1.webp', 'gpu2.webp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 4, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(33, 'ASUS RTX 4060 Ti ', 450, 'gpu1.webp', 'gpu2.webp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 4, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33'),
(34, 'INNO3D PCI-Ex GeForce RTX 4060 Ti iChill', 450, 'gpu1.webp', 'gpu2.webp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.\r\n\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 4, 1, '2023-12-17 18:54:33', '2023-12-17 18:54:33');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `review` text NOT NULL,
  `rating` int NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `nickname`, `review`, `rating`, `date`, `created_at`, `updated_at`) VALUES
(1, 'tonystark28', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 9, '2023-12-06', '2023-12-17 10:41:58', '2023-12-17 10:41:58'),
(2, 'straiker', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 8, '2023-10-22', '2023-12-17 10:43:33', '2023-12-17 10:43:33'),
(3, 'alergo', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 8, '2023-12-05', '2023-12-17 10:43:33', '2023-12-17 10:43:33'),
(4, 'kate11', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 7, '2023-06-28', '2023-12-17 10:43:33', '2023-12-17 10:43:33'),
(5, 'mommy', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.', 10, '2023-11-11', '2023-12-17 10:44:17', '2023-12-17 10:44:17');

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `statuses`
--

INSERT INTO `statuses` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Ready to ship', '2023-12-17 18:47:21', '2023-12-17 18:47:21'),
(2, 'Not available', '2023-12-17 18:48:01', '2023-12-17 18:48:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`category_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
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
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
