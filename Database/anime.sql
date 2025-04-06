-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2025 at 02:52 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `anime`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `filter_gonres`
--

CREATE TABLE `filter_gonres` (
  `id` int(222) NOT NULL,
  `anime_id` int(20) NOT NULL,
  `gonres_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `filter_gonres`
--

INSERT INTO `filter_gonres` (`id`, `anime_id`, `gonres_id`) VALUES
(427, 1, 1),
(428, 1, 2),
(429, 1, 3),
(430, 1, 4),
(431, 1, 6),
(432, 1, 8),
(433, 1, 10),
(434, 1, 11),
(435, 1, 16),
(436, 1, 17),
(437, 1, 19),
(438, 1, 20),
(439, 1, 21),
(440, 1, 25),
(441, 1, 26),
(442, 1, 27),
(443, 1, 28),
(444, 1, 29),
(445, 1, 31),
(446, 1, 32),
(447, 1, 33),
(448, 2, 1),
(449, 2, 2),
(450, 2, 3),
(451, 2, 4),
(452, 2, 6),
(453, 2, 11),
(454, 2, 16),
(455, 2, 17),
(456, 2, 19),
(457, 2, 21),
(458, 2, 22),
(459, 2, 26),
(460, 2, 30),
(461, 2, 31),
(462, 2, 32),
(463, 3, 1),
(464, 3, 2),
(465, 3, 3),
(466, 3, 4),
(467, 3, 6),
(468, 3, 10),
(469, 3, 11),
(470, 3, 16),
(471, 3, 19),
(472, 3, 20),
(473, 3, 21),
(474, 3, 22),
(475, 3, 25),
(476, 3, 26),
(477, 3, 27),
(478, 3, 30),
(479, 3, 31),
(480, 3, 32),
(481, 4, 1),
(482, 4, 2),
(483, 4, 6),
(484, 4, 8),
(485, 4, 10),
(486, 4, 14),
(487, 4, 19),
(488, 4, 20),
(489, 4, 22),
(490, 4, 26),
(491, 4, 27),
(492, 4, 30),
(493, 4, 31),
(494, 4, 32),
(630, 6, 1),
(631, 6, 2),
(632, 6, 3),
(633, 6, 4),
(634, 6, 5),
(635, 6, 6),
(636, 6, 11),
(637, 6, 13),
(638, 6, 14),
(639, 6, 16),
(640, 6, 19),
(641, 6, 25),
(642, 6, 26),
(643, 6, 30),
(644, 6, 31),
(645, 6, 32),
(646, 6, 33),
(647, 5, 1),
(648, 5, 2),
(649, 5, 3),
(650, 5, 4),
(651, 5, 6),
(652, 5, 7),
(653, 5, 10),
(654, 5, 11),
(655, 5, 12),
(656, 5, 16),
(657, 5, 19),
(658, 5, 20),
(659, 5, 21),
(660, 5, 25),
(661, 5, 30),
(662, 5, 31),
(663, 5, 32),
(664, 5, 33),
(665, 7, 1),
(666, 7, 2),
(667, 7, 3),
(668, 7, 4),
(669, 7, 6),
(670, 7, 11),
(671, 7, 13),
(672, 7, 14),
(673, 7, 16),
(674, 7, 19),
(675, 7, 22),
(676, 7, 25),
(677, 7, 30),
(678, 7, 31),
(679, 7, 32),
(680, 7, 33),
(681, 8, 1),
(682, 8, 2),
(683, 8, 3),
(684, 8, 6),
(685, 8, 14),
(686, 8, 19),
(687, 8, 22),
(688, 8, 25),
(689, 8, 30),
(690, 8, 31),
(691, 8, 32),
(692, 8, 33),
(693, 9, 4),
(694, 9, 6),
(695, 9, 11),
(696, 9, 25),
(697, 9, 26),
(698, 9, 27),
(699, 10, 1),
(700, 10, 2),
(701, 10, 3),
(702, 10, 4),
(703, 10, 6),
(704, 10, 13),
(705, 10, 16),
(706, 10, 19),
(707, 10, 25),
(708, 10, 27),
(709, 10, 32),
(710, 10, 33),
(711, 11, 1),
(712, 11, 2),
(713, 11, 3),
(714, 11, 4),
(715, 11, 6),
(716, 11, 7),
(717, 11, 11),
(718, 11, 16),
(719, 11, 19),
(720, 11, 22),
(721, 11, 25),
(722, 11, 30),
(723, 11, 31),
(724, 11, 32),
(725, 11, 33),
(726, 12, 1),
(727, 12, 2),
(728, 12, 3),
(729, 12, 4),
(730, 12, 6),
(731, 12, 11),
(732, 12, 16),
(733, 12, 19),
(734, 12, 25),
(735, 12, 26),
(736, 12, 30),
(737, 12, 31),
(738, 12, 33),
(739, 13, 1),
(740, 13, 2),
(741, 13, 3),
(742, 13, 4),
(743, 13, 6),
(744, 13, 11),
(745, 13, 16),
(746, 13, 19),
(747, 13, 21),
(748, 13, 22),
(749, 13, 25),
(750, 13, 26),
(751, 13, 30),
(752, 13, 31),
(753, 13, 32),
(754, 13, 33),
(755, 14, 1),
(756, 14, 2),
(757, 14, 3),
(758, 14, 4),
(759, 14, 6),
(760, 14, 11),
(761, 14, 16),
(762, 14, 19),
(763, 14, 25),
(764, 14, 26),
(765, 14, 30),
(766, 14, 31),
(767, 14, 32),
(768, 14, 33),
(769, 15, 1),
(770, 15, 2),
(771, 15, 3),
(772, 15, 4),
(773, 15, 6),
(774, 15, 10),
(775, 15, 16),
(776, 15, 19),
(777, 15, 22),
(778, 15, 25),
(779, 15, 30),
(780, 15, 31),
(781, 15, 32),
(782, 15, 33),
(783, 16, 1),
(784, 16, 2),
(785, 16, 3),
(786, 16, 4),
(787, 16, 6),
(788, 16, 9),
(789, 16, 11),
(790, 16, 14),
(791, 16, 19),
(792, 16, 21),
(793, 16, 25),
(794, 16, 30),
(795, 16, 31),
(796, 16, 32),
(797, 16, 33),
(798, 17, 1),
(799, 17, 2),
(800, 17, 3),
(801, 17, 4),
(802, 17, 6),
(803, 17, 10),
(804, 17, 11),
(805, 17, 12),
(806, 17, 14),
(807, 17, 15),
(808, 17, 19),
(809, 17, 22),
(810, 17, 23),
(811, 17, 25),
(812, 17, 30),
(813, 17, 31),
(814, 17, 32),
(815, 17, 33),
(816, 18, 1),
(817, 18, 2),
(818, 18, 3),
(819, 18, 4),
(820, 18, 6),
(821, 18, 11),
(822, 18, 16),
(823, 18, 19),
(824, 18, 25),
(825, 18, 26),
(826, 18, 27),
(827, 18, 33),
(828, 19, 1),
(829, 19, 2),
(830, 19, 3),
(831, 19, 4),
(832, 19, 6),
(833, 19, 10),
(834, 19, 11),
(835, 19, 16),
(836, 19, 19),
(837, 19, 25),
(838, 19, 30),
(839, 19, 31),
(840, 19, 32),
(841, 19, 33),
(842, 20, 1),
(843, 20, 2),
(844, 20, 3),
(845, 20, 4),
(846, 20, 6),
(847, 20, 7),
(848, 20, 9),
(849, 20, 10),
(850, 20, 11),
(851, 20, 12),
(852, 20, 15),
(853, 20, 16),
(854, 20, 17),
(855, 20, 19),
(856, 20, 21),
(857, 20, 22),
(858, 20, 23),
(859, 20, 25),
(860, 20, 26),
(861, 20, 27),
(862, 20, 30),
(863, 20, 31),
(864, 20, 32),
(865, 20, 33),
(866, 37, 1),
(867, 37, 2),
(868, 37, 3),
(869, 37, 4),
(870, 37, 6),
(871, 37, 8),
(872, 37, 10),
(873, 37, 11),
(874, 37, 17),
(875, 37, 25),
(876, 37, 30),
(877, 37, 31),
(878, 37, 32),
(879, 37, 33),
(880, 21, 1),
(881, 21, 2),
(882, 21, 3),
(883, 21, 4),
(884, 21, 6),
(885, 21, 16),
(886, 21, 19),
(887, 21, 22),
(888, 21, 29),
(889, 21, 30),
(890, 21, 31),
(891, 21, 32),
(892, 21, 33),
(893, 22, 1),
(894, 22, 2),
(895, 22, 3),
(896, 22, 4),
(897, 22, 6),
(898, 22, 10),
(899, 22, 11),
(900, 22, 12),
(901, 22, 15),
(902, 22, 16),
(903, 22, 19),
(904, 22, 23),
(905, 22, 25),
(906, 22, 26),
(907, 22, 30),
(908, 22, 31),
(909, 22, 32),
(910, 22, 33),
(911, 36, 1),
(912, 36, 2),
(913, 36, 3),
(914, 36, 6),
(915, 36, 10),
(916, 36, 15),
(917, 36, 16),
(918, 36, 19),
(919, 36, 21),
(920, 36, 22),
(921, 36, 23),
(922, 36, 25),
(923, 36, 26),
(924, 36, 27),
(925, 36, 30),
(926, 36, 31),
(927, 36, 32),
(928, 36, 33),
(929, 38, 1),
(930, 38, 2),
(931, 38, 3),
(932, 38, 4),
(933, 38, 6),
(934, 38, 8),
(935, 38, 10),
(936, 38, 11),
(937, 38, 12),
(938, 38, 19),
(939, 38, 22),
(940, 38, 25),
(941, 38, 26),
(942, 38, 27),
(943, 38, 30),
(944, 38, 31),
(945, 38, 32),
(946, 38, 33),
(947, 39, 1),
(948, 39, 2),
(949, 39, 3),
(950, 39, 4),
(951, 39, 6),
(952, 39, 11),
(953, 39, 16),
(954, 39, 19),
(955, 39, 31),
(956, 39, 30),
(957, 39, 32),
(958, 39, 33),
(959, 40, 1),
(960, 40, 4),
(961, 40, 6),
(962, 40, 11),
(963, 40, 12),
(964, 40, 25),
(965, 41, 1),
(966, 41, 2),
(967, 41, 3),
(968, 41, 6),
(969, 41, 8),
(970, 41, 14),
(971, 41, 19),
(972, 41, 22),
(973, 42, 1),
(974, 42, 2),
(975, 42, 3),
(976, 42, 19),
(977, 42, 30),
(978, 42, 31),
(979, 42, 32),
(980, 42, 33),
(981, 43, 1),
(982, 43, 2),
(983, 43, 3),
(984, 43, 4),
(985, 43, 5),
(986, 43, 6),
(987, 43, 10),
(988, 43, 11),
(989, 43, 12),
(990, 43, 15),
(991, 43, 16),
(992, 43, 19),
(993, 43, 20),
(994, 43, 21),
(995, 43, 22),
(996, 43, 23),
(997, 43, 25),
(998, 43, 30),
(999, 43, 31),
(1000, 43, 32),
(1001, 43, 33);

-- --------------------------------------------------------

--
-- Table structure for table `gonres`
--

CREATE TABLE `gonres` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gonres`
--

INSERT INTO `gonres` (`id`, `name`) VALUES
(1, 'action'),
(2, 'adventure'),
(3, 'combat'),
(4, 'comedy'),
(5, 'crossdressing'),
(6, 'drama'),
(7, 'echhi'),
(8, 'educational'),
(9, 'erotica'),
(10, 'fantasy'),
(11, 'humor'),
(12, 'harem'),
(13, 'historical'),
(14, 'horror'),
(15, 'isekai'),
(16, 'martial arts'),
(17, 'mecha'),
(18, 'medical'),
(19, 'mystory'),
(20, 'mythology'),
(21, 'pets'),
(22, 'psychological'),
(23, 'reincarnation'),
(24, 'revers harem'),
(25, 'romance'),
(26, 'school'),
(27, 'slice of life'),
(28, 'space'),
(29, 'sports'),
(30, 'super power'),
(31, 'supernatural'),
(32, 'survival'),
(33, 'suspense');

-- --------------------------------------------------------

--
-- Table structure for table `home_page`
--

CREATE TABLE `home_page` (
  `id` int(22) NOT NULL,
  `name` varchar(220) NOT NULL,
  `alias` varchar(220) NOT NULL,
  `year` year(4) NOT NULL,
  `desc` varchar(1500) NOT NULL,
  `img` varchar(500) NOT NULL,
  `video` varchar(800) NOT NULL,
  `language` varchar(80) NOT NULL,
  `episode` int(255) NOT NULL,
  `rating` int(6) NOT NULL,
  `status` varchar(50) DEFAULT 'Ongoing Airing'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `home_page`
--

INSERT INTO `home_page` (`id`, `name`, `alias`, `year`, `desc`, `img`, `video`, `language`, `episode`, `rating`, `status`) VALUES
(1, 'dragon balllz', 'dragon_ballz', 1978, 'Dragon Ball is a legendary Japanese manga and anime series created by Akira Toriyama. The story follows Goku, a powerful and kind-hearted warrior with a tail, as he embarks on adventures to find the seven magical Dragon Balls. When gathered, the Dragon Balls can summon a dragon that grants a wish. As Goku grows up, he faces increasingly powerful foes, makes strong allies, and participates in martial arts tournaments.', 'dragon_ballz.webp', '1741943223_videoplayback (1).mp4', 'english', 50, 5, 'Ongoing Airing'),
(2, 'Jujutsu Kaisen', 'jujutsu_kaisen', 2017, 'Jujutsu Kaisen (often abbreviated as JJK) is a popular Japanese manga and anime series written and illustrated by Gege Akutami. The story is set in a world where cursed spirits and dark sorcery exist, with powerful \"cursed energy\" that can be used for both good and evil.', 'images.jpg', '1741943308_JUJUTSU KAISEN Shibuya Incident _ Official Trailer _ Netflix.mp4', 'english', 50, 5, 'Ongoing Airing'),
(3, 'bleach', 'bleach', 2004, 'Bleach is a Japanese manga and anime series created by Tite Kubo. The story follows Ichigo Kurosaki, a teenager who accidentally gains the powers of a Soul Reaper, a death god tasked with protecting the living world from evil spirits called Hollows and guiding the souls of the dead to the afterlife in the Soul Society. Ichigo\'s powers are awakened when he inadvertently takes on the responsibilities of Rukia Kuchiki, a Soul Reaper who is forced to transfer her powers to him after being injured by', 'medium-bleach-anime-series-matte-finish-poster-butcute6397-original-imag8rkcycxyax2w.webp', '1741943388_videoplayback (2).mp4', 'english', 50, 5, 'Ongoing Airing'),
(4, 'Death Note', 'death_note', 2017, 'Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. It follows the story of Light Yagami, a highly intelligent high school student who discovers a mysterious notebook called the Death Note. The Death Note has the power to kill anyone whose name is written in it, as long as the writer knows the person\'s face.', 'death_note.jpg', '1741943483_Death Note _ OFFICIAL TRAILER.mp4', 'english', 50, 5, 'Finished Airing'),
(5, 'One Piece', 'one_piece', 1994, 'One Piece follows the adventures of Monkey D. Luffy, a young pirate with a rubber-like body after eating the Gomu Gomu no Mi Devil Fruit. Inspired by his childhood hero, he sets sail to find the legendary treasure, the One Piece, and become the King of the Pirates. Along the way, he forms the Straw Hat Pirates, encountering powerful enemies, mysterious islands, and uncovering the world\'s biggest secrets. The story blends action, adventure, comedy, and deep emotional moments, making it one of the greatest anime of all time. 🌊🏴‍☠️🔥', '91BzGjkvEEL._AC_UF894,1000_QL80_.jpg', '1741943567_ONE PIECE _ Netflix Trailer _ Anime Version.mp4', 'english', 1200, 5, 'Ongoing Airing'),
(6, 'demon slayer', 'demon_slayer', 2017, 'Demon Slayer: Kimetsu no Yaiba follows Tanjiro Kamado, a kind-hearted boy who becomes a demon slayer after his family is slaughtered by demons, leaving only his sister Nezuko, who is turned into one. Determined to find a cure for Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, facing powerful demons and uncovering dark secrets about their origins. With breathtaking battles, emotional storytelling, and stunning animation, Demon Slayer is a gripping tale of resilience, family, and the fight against evil.', 'demon slayer.jpg', '1741943617_videoplayback (3).mp4', 'english', 50, 5, 'Ongoing Airing'),
(7, 'Attack On Titan', 'attack_on_titan', 2014, 'In a world where humanity is on the brink of extinction due to giant humanoid creatures called Titans, survivors live within massive walled cities for protection. Eren Yeager, along with his friends Mikasa Ackerman and Armin Arlert, joins the military to fight back after witnessing the destruction of his home. As they uncover dark secrets about the Titans and their own world, shocking truths about humanity’s past and future come to light.', '634e993163f2507123442456-fgaa-anime-poster-attack-on-titan-poster.jpg', '1741943677_videoplayback (4).mp4', 'english', 150, 5, 'Ongoing Airing'),
(8, 'Tokyo Ghoul', 'tokyo_ghoul', 2015, 'In a world where flesh-eating Ghouls secretly exist among humans, Ken Kaneki, a shy college student, unknowingly goes on a date with a Ghoul named Rize Kamishiro. After a deadly encounter, Kaneki undergoes an emergency organ transplant using Rize’s Ghoul organs, turning him into a half-Ghoul. Struggling between his human and Ghoul instincts, he is taken in by Anteiku, a café that helps Ghouls coexist peacefully. As Kaneki learns to survive in this violent world, he faces terrifying enemies and discovers dark conspiracies about both Ghouls and humans.', '51UfgHEbgiL.jpg', '1741943726_Tokyo Ghoul_re _ Official trailer [English Sub].mp4', 'english', 100, 5, 'Finished Airing'),
(9, 'Horimiya', 'horimiya', 2020, 'Horimiya follows the unexpected romance between Kyoko Hori, a popular and cheerful high school girl, and Izumi Miyamura, a quiet and seemingly nerdy classmate. However, outside of school, Hori is a responsible older sister who takes care of her younger brother, while Miyamura is actually a kind-hearted guy with tattoos and piercings. After discovering each other’s hidden sides, they grow closer, forming a heartfelt and wholesome relationship filled with love, friendship, and self-discovery.', 'horimiya.jpg', '1741944394_Horimiya _ OFFICIAL TRAILER [English Sub].mp4', 'english', 24, 5, 'Ongoing Airing'),
(10, 'Vinland Saga', 'vinland_saga', 2020, 'Vinland Saga is a historical anime set during the Viking era, following Thorfinn, a young warrior seeking revenge against Askeladd, the cunning mercenary who killed his father. As he grows up in the brutal world of war and conquest, Thorfinn struggles between vengeance and finding a greater purpose in life. Inspired by the legends of Vinland, a peaceful land free from violence, his journey evolves from bloodshed to a deeper search for true freedom and peace.', 'vinland saga.jpg', '1741945198_VINLAND SAGA SEASON 2 _ OFFICIAL TRAILER 2.mp4', 'english', 48, 5, 'Ongoing Airing'),
(11, 'JoJo', 'JoJo', 1999, 'JoJo’s Bizarre Adventure is an action-packed anime that follows the generations of the Joestar family, each with unique abilities, as they battle powerful enemies across different eras. The story is divided into multiple parts, each featuring a new \"JoJo\" protagonist, from Jonathan Joestar’s fight against the immortal Dio Brando to Jotaro Kujo’s Stand battles and beyond. With its stylish characters, intense fights, and supernatural abilities called Stands, JoJo’s Bizarre Adventure is a legendary tale of destiny, courage, and bizarre battles spanning generations.', 'jojo.jpg', '1741945258_JoJo’s Bizarre Adventure STONE OCEAN _ Official Trailer _ Netflix.mp4', 'english', 954, 5, 'Finished Airing'),
(12, 'Spy Family', 'spy_family', 2022, 'Spy x Family is a heartwarming and action-packed anime that follows Twilight, an elite spy who takes on the identity of Loid Forger to complete a critical mission. To maintain his cover, he unknowingly forms a fake family by adopting a telepathic girl, Anya, and marrying an assassin, Yor Briar. While Loid tries to balance espionage with family life, Anya\'s secret mind-reading ability and Yor\'s deadly skills create hilarious and touching moments. Filled with comedy, action, and wholesome family dynamics, Spy x Family is a must-watch for fans of adventure and heartfelt storytelling.', 'spy family.jpeg', '1741945312_SPY x FAMILY _ MAIN TRAILER.mp4', 'english', 50, 5, 'Ongoing Airing'),
(13, 'Naruto', 'naruto', 1999, 'Naruto is a story about Naruto Uzumaki, a young ninja who dreams of becoming the Hokage, the leader of his village, to earn the respect of others. He grew up isolated because he carries the Nine-Tails Fox (Kyūbi) spirit inside him, which attacked the village years ago. Despite this, Naruto is determined to prove his worth and make lasting bonds with others. Along his journey, he forms deep friendships with fellow ninjas, including Sasuke Uchiha and Sakura Haruno, and faces challenges like the po', 'NARUTO37_682fec30-603c-466e-9c5d-0033ee55d9b0.webp', '1741945374_Official Trailer _ Naruto Shippuden, Set 1_ VIZ.mp4', 'english,japanese', 650, 4, 'Finished Airing'),
(14, 'My Hero Academia', 'my_hero_academia', 2016, 'In a world where 80% of the population has superpowers known as Quirks, Izuku Midoriya is one of the rare individuals born without one. Despite this, he dreams of becoming a great hero like his idol, All Might. His life changes forever when All Might chooses him as his successor and grants him the powerful Quirk, One For All. Enrolling in U.A. High School, Midoriya trains alongside his classmates to become the next generation of heroes while facing powerful villains and uncovering dark secrets.', 'my hero academiya.jpg', '1741945464_videoplayback (5).mp4', 'english', 159, 3, 'Finished Airing'),
(15, 'Solo Leveling', 'solo_leveling', 2024, 'Solo Leveling is a South Korean web novel (later adapted into a manhwa) set in a world where dungeons appear, and \"Hunters\" with special powers fight monsters inside them. The story follows Sung Jin-Woo, an E-rank Hunter who is considered the weakest. After a near-death experience in a dangerous dungeon, he gains the ability to \"level up\" and grow stronger, unlike any other Hunter.', 'solo leveling.jpg', '1741945521_videoplayback (6).mp4', 'english', 12, 5, 'Ongoing Airing'),
(16, 'Chainsaw Man', 'chainsaw_man', 2022, 'Denji, a young devil hunter, struggles to survive by working for the Yakuza to pay off his deceased father’s debt. His only companion is Pochita, his pet Chainsaw Devil. After being betrayed and killed, Pochita sacrifices himself to revive Denji, merging with him to create Chainsaw Man—a being with chainsaws emerging from his arms and head. Now recruited by Public Safety Devil Hunters, Denji fights powerful devils while chasing his dream of living a better life filled with simple pleasures. However, darker forces lurk in the shadows, threatening his newfound freedom.', 'chainsow man.jpg', '1741945597_Chainsaw Man _ MAIN TRAILER.mp4', 'english', 24, 4, 'Ongoing Airing'),
(17, 'Re: Zero', 're_zero', 2016, 'Subaru Natsuki, an ordinary teenager, is suddenly transported to a fantasy world. Without any special powers, he soon discovers he has one unique ability—Return by Death, which allows him to restart from a certain point every time he dies. As he struggles to survive and protect Emilia, a mysterious silver-haired girl who saved him, Subaru faces countless deaths, betrayals, and heartbreaks. With each reset, he must unravel the secrets of the world and change fate itself to achieve a happy ending.', 're-zero.jpg', '1741945659_videoplayback (7).mp4', 'english', 220, 4, 'Ongoing Airing'),
(18, 'Tokyo Revengers', 'tokyo_revengers', 2017, 'Takemichi Hanagaki, a struggling young man, discovers that his ex-girlfriend Hinata Tachibana was killed by the ruthless Tokyo Manji Gang. After an accident, he is mysteriously sent back 12 years into the past, when he was a delinquent. Realizing he has a chance to change the future, Takemichi vows to climb the ranks of the gang and prevent Hinata\'s death. With each time leap, he uncovers dark secrets, forms alliances, and battles against fate to save his loved ones.', 'tokyo revenge.jpg', '1741945751_videoplayback (8).mp4', 'english', 50, 4, 'Ongoing Airing'),
(19, 'Fullmetal Alchemist', 'fullmetal_alchemist', 2009, 'In the world of alchemy, brothers Edward and Alphonse Elric commit the ultimate taboo by trying to resurrect their dead mother using alchemy. Their attempt fails, and Edward loses his arm and leg, while Alphonse loses his entire body, his soul bound to a suit of armor. To restore their bodies, they embark on a journey to find the Philosopher’s Stone, a legendary artifact that enhances alchemy’s power. Along the way, they uncover dark government secrets, battle Homunculi, and confront the truth behind human transmutation.', 'alcamay.jpg', '1741945826_Fullmetal Alchemist_ Brotherhood _ Trailer 1 [sub]_ BONFIRE.mp4', 'english', 59, 5, 'Finished Airing'),
(20, 'Mushoku Tensei Jobless Reincarnation', 'mushoku_tensei', 2021, 'A jobless and hopeless man dies and is reincarnated in a fantasy world as Rudeus Greyrat, retaining his past memories. Determined to live a better life, he trains in magic from a young age and embarks on an adventure filled with friendships, love, and danger. As he grows, he faces challenges, betrayals, and battles while seeking purpose and redemption in his new world.', 'mushoku tensei.jpg', '1741945887_videoplayback (9).mp4', 'english', 100, 5, 'Ongoing Airing'),
(21, 'Blue Lock', 'blue_lock', 2022, 'Blue Lock is a sports anime based on the manga by Muneyuki Kaneshiro and Yusuke Nomura. The story follows Yoichi Isagi, a talented but hesitant high school soccer player who is invited to the Blue Lock program—an intense and ruthless training camp designed to create the ultimate striker for Japan\'s national team. With hundreds of skilled players competing under extreme conditions, Isagi must develop his ego and skills to survive and become the best striker in the world.', 'blue lock.jpg', '1741946835_BLUE LOCK _ OFFICIAL TRAILER.mp4', 'english', 12, 4, 'Ongoing Airing'),
(22, 'Tsukimichi: Moonlit Fantasy', 'Tsukimichi_Moonlit_Fantasy', 2021, 'Tsukimichi: Moonlit Fantasy (Tsuki ga Michibiku Isekai Douchuu) is an isekai anime based on the light novel by Kei Azumi. The story follows Makoto Misumi, an ordinary high school student who is transported to a fantasy world as part of a hero summoning. However, the goddess of that world deems him \"too ugly\" and abandons him in the wilderness. Blessed with incredible powers, Makoto embarks on an adventure, forming alliances with powerful beings while trying to find his own place in this new world.', 'tesu.jpg', '1741946923_videoplayback (10).mp4', 'english', 48, 5, 'Ongoing Airing'),
(36, 'begning after the end', 'begning_after_the_end', 2025, 'The Beginning After the End (TBATE) is a popular web novel and manhwa written by TurtleMe. It follows King Grey, a powerful ruler who is reincarnated into a magical world as Arthur Leywin after his death. With memories of his past life, Arthur seeks to grow stronger while navigating a world filled with magic, political struggles, and powerful enemies. As he uncovers hidden secrets about his new world, he must protect those he loves while fulfilling his destiny.', '1741873211_1168270 (1).png', '1741946976_videoplayback (11).mp4', 'English', 25, 5, 'Ongoing Airing'),
(37, 'Steins Gate', 'steins_gate', 2011, 'Steins;Gate follows Rintarou Okabe, a self-proclaimed mad scientist, who accidentally discovers time travel through a modified microwave. Alongside his friends, he delves into altering the past, only to face unforeseen consequences and a struggle against a powerful organization. As timelines shift, Okabe must navigate complex paradoxes to save those he loves.', '1741946462_Steins;Gate_ STEINS;GATE_.jpg', '1741946462_Steins;Gate _ Anime Trailer [HD] _ 2011.mp4', 'English', 24, 5, 'Ongoing Airing'),
(38, 'Code Geass', 'code_geass', 2006, 'Code Geass: Lelouch of the Rebellion is a mecha anime set in an alternate timeline where the Holy Britannian Empire has conquered Japan, renaming it Area 11. The story follows Lelouch vi Britannia, an exiled Britannian prince who gains the mysterious Geass power, allowing him to command absolute obedience. Using this ability, he adopts the persona of Zero and leads a rebellion against Britannia to avenge his mother, protect his sister, and create a better world.', '1741947243_download.jpg', '1741947243_Full Trailer _ Code Geass_ Lelouch of the rebellion (English).mp4', 'Japanese', 25, 5, 'Ongoing Airing'),
(39, 'Hunter × Hunter', 'hunter_×_hunter', 1992, 'Hunter × Hunter is an adventure anime based on the manga by Yoshihiro Togashi. It follows Gon Freecss, a young boy who aspires to become a Hunter to find his long-lost father, Ging. Along the way, he befriends Killua, Kurapika, and Leorio, encountering dangerous creatures, powerful enemies, and intense challenges as they strive to achieve their own goals.', '1741947445_POSTER STOP ONLINE Hunter X Hunter - Manga_Anime TV Show Poster (Key Art - Running) (Size 24 x 36).jpg', '1741947445_videoplayback (12).mp4', 'English', 62, 5, 'Ongoing Airing'),
(40, 'Your Lie in April (Shigatsu wa Kimi no Uso)', 'Your_Lie_in_April_(Shigatsu_wa_Kimi_no_Uso)', 2014, 'Your Lie in April is a drama and romance anime based on the manga by Naoshi Arakawa. It follows Kousei Arima, a piano prodigy who loses his ability to hear the sound of his own playing after his mother\'s death. His world changes when he meets Kaori Miyazono, a free-spirited violinist who helps him rediscover music, love, and life. However, Kaori harbors a heartbreaking secret that will change Kousei forever', '1741947640_Your Lie In April (2014-2015).jpg', '1741947640_Your lie in April Trailer.mp4', 'Japanese', 22, 3, 'Ongoing Airing'),
(41, 'Monster', 'Monster', 2004, 'Monster is a psychological thriller anime based on the manga by Naoki Urasawa. The story follows Dr. Kenzo Tenma, a brilliant Japanese neurosurgeon working in Germany. One fateful night, he chooses to save a young boy named Johan Liebert instead of an influential politician. Years later, Tenma discovers that Johan has grown into a cunning and ruthless serial killer. Blamed for crimes he didn’t commit, Tenma embarks on a dangerous journey to stop Johan and uncover the horrifying truth behind his past.', '1741947888_Monster.jpg', '1741947888_videoplayback (13).mp4', 'English', 74, 5, 'Ongoing Airing'),
(42, 'Psycho-Pass', 'Psycho-Pass', 2012, 'Psycho-Pass is a cyberpunk psychological thriller anime set in a dystopian future where the Sibyl System determines a person’s potential for criminal activity by analyzing their mental state, known as their Psycho-Pass. The story follows Akane Tsunemori, a new Inspector in the Public Safety Bureau, who works alongside Enforcers, former criminals tasked with apprehending threats. As Akane questions the morality of the system, she encounters Shogo Makishima, a dangerous criminal who challenges the very foundation of their society.', '1741948039_PSYCHO-PASS.jpg', '1741948039_videoplayback (14).mp4', 'English', 22, 5, 'Ongoing Airing'),
(43, 'That Time I Got Reincarnated as a Slime', 'That_Time_I_Got_Reincarnated_as_a_Slime', 2018, 'That Time I Got Reincarnated as a Slime is a popular isekai fantasy anime based on the light novel by Fuse. It follows Satoru Mikami, an ordinary office worker who is killed in a stabbing incident and reincarnates in a fantasy world as a slime. Gaining powerful abilities, including Predator, which lets him absorb and mimic skills, he takes on the name Rimuru Tempest and sets out to build a peaceful nation for monsters, making allies and facing powerful enemies along the way.', '1741948266__That Time I Got Reincarnated as a Slime_ TV Anime Season 3_.jpg', '1741948266_videoplayback (15).mp4', 'English', 49, 5, 'Ongoing Airing');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trending`
--

CREATE TABLE `trending` (
  `id` int(22) NOT NULL,
  `view` int(11) NOT NULL,
  `name` varchar(220) NOT NULL,
  `alias` varchar(220) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trending`
--

INSERT INTO `trending` (`id`, `view`, `name`, `alias`) VALUES
(1, 27, 'dragon balllz', 'dragon_ballz'),
(2, 16, 'Jujutsu Kaisen', 'jujutsu_kaisen'),
(3, 7, 'bleach', 'bleach'),
(4, 40, 'Death Note', 'death_note'),
(5, 25, 'One Piece', 'one_piece'),
(6, 18, 'demon slayer', 'demon_slayer'),
(7, 5, 'Attack On Titan', 'attack_on_titan'),
(8, 8, 'Tokyo Ghoul', 'tokyo_ghoul'),
(9, 9, 'Horimiya', 'horimiya'),
(10, 2, 'Vinland Saga', 'vinland_saga'),
(11, 2, 'JoJo', 'JoJo'),
(12, 4, 'Spy Family', 'spy_family'),
(13, 3, 'Naruto', 'naruto'),
(14, 2, 'My Hero Academia', 'my_hero_academia'),
(15, 4, 'Solo Leveling', 'solo_leveling'),
(16, 2, 'Chainsaw Man', 'chainsaw_man'),
(17, 2, 'Re: Zero', 're_zero'),
(18, 4, ' Tokyo Revengers', ' tokyo_revengers'),
(19, 4, 'Fullmetal Alchemist', 'fullmetal_alchemist'),
(20, 2, 'Mushoku Tensei Jobless Reincarnation', 'mushoku_tensei'),
(21, 4, 'Blue Lock', 'blue_lock'),
(22, 4, 'Tsukimichi: Moonlit Fantasy', 'Tsukimichi_Moonlit_Fantasy');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(50) NOT NULL,
  `token` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `token`, `role`) VALUES
(1, 'yash', 'yash@gmail.com', '12345', 'jGTe7CDa98sGYQh7btm5QviDYSYAqC8Utjv0Cyf5KX2IV0fcA5', 'admin'),
(9, 'Bobby Sharma', 'Bobby@gmail.com', '12345', 'hCysfm6C4qAQSZHT7GXyAAt7qStDVqwAdJX04hvFNtb97VOACL', 'user'),
(10, 'prem', 'prem@gmail.com', '12345', '3NFToiAu3Rm3zg0nVrpEe0eKc9CN6sAqoMjbd4YUf4q50iXvQp', 'user'),
(13, 'yash', 'yash@gmail.com', '12345', 'jGTe7CDa98sGYQh7btm5QviDYSYAqC8Utjv0Cyf5KX2IV0fcA5', 'admin'),
(14, 'Yash Sharma', 'yashsharmadev15@gmail.com', 'yash123@#$', 'BqHeRHVDTG2DHmPDZTvZ5SfBeJoUp3TLNRcZMyBzJHsRfZXuPn', 'admin'),
(15, 'rose', 'rose@gmail.com', '2002', 'ycZiqLYRCD8wwBaAddzUwBOxMtBCQb0DlQUcEjbXDs59r5CYaa', 'user'),
(16, 'hello', 'hello@gmail.com', '2002', 'mLTmXfqVi4myCAsj0U2N96dmtLz9FIMZEe7AObeEz4PziG3aVL', 'user'),
(17, 'hello', 'hello@gmail.com', '2002', 'FASbrZur0ugmVFi6bG7uzN3MU4uW09zgMeOTjaChQM1vxJUPEo', 'user'),
(18, 'rahul', 'rahul@gmail.com', '$2y$10$0tozoYWB4.ENcIZKUp.c3OLpBcNqxW8bUx.jTNmU.EW', '8b27c0b32fe7ee188de449426a86ab2c8d24ddac14425fde40', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
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
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `filter_gonres`
--
ALTER TABLE `filter_gonres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gonres`
--
ALTER TABLE `gonres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_page`
--
ALTER TABLE `home_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `trending`
--
ALTER TABLE `trending`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
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
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `filter_gonres`
--
ALTER TABLE `filter_gonres`
  MODIFY `id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;

--
-- AUTO_INCREMENT for table `gonres`
--
ALTER TABLE `gonres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `home_page`
--
ALTER TABLE `home_page`
  MODIFY `id` int(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trending`
--
ALTER TABLE `trending`
  MODIFY `id` int(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
