-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Universities'
-- 
-- ---

CREATE DATABASE UFORU;

USE UFORU;

DROP TABLE IF EXISTS `Universities`;
		
CREATE TABLE `Universities` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` MEDIUMTEXT NOT NULL,
  `address` MEDIUMTEXT NOT NULL,
  `state` MEDIUMTEXT NOT NULL,
  `description` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `admission_rate` float NOT NULL,
  `tuition` INTEGER NOT NULL,
  `size` INTEGER NOT NULL,
  `average_gpa` DECIMAL (10,1) NOT NULL,
  `average_sat_score` INTEGER NOT NULL,
  `sports_division` INTEGER NOT NULL,
  `website_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Majors'
-- 
-- ---

DROP TABLE IF EXISTS `Majors`;
		
CREATE TABLE `Majors` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `major` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
-- 
-- ---


CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` MEDIUMTEXT NOT NULL,
  `password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Join'
-- 
-- ---

CREATE TABLE `favorites` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL,
  `university_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `favorites` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `favorites` ADD FOREIGN KEY (university_id) REFERENCES `Universities` (`id`);
-- ---
-- Table 'Join'
-- 
-- ---
		
CREATE TABLE `majors_universities` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `major_id` INTEGER NOT NULL,
  `university_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `majors_universities` ADD FOREIGN KEY (major_id) REFERENCES `Majors` (`id`);
ALTER TABLE `majors_universities` ADD FOREIGN KEY (university_id) REFERENCES `Universities` (`id`);

