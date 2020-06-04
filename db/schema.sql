DROP DATABASE if exists workout_db;
CREATE DATABASE workout_db;
USE workout_db;

CREATE TABLE IF NOT EXISTS `Users` 
(
    id INTEGER NOT NULL auto_increment , 
    email VARCHAR(255) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL, 
     createdAt DATETIME NOT NULL, 
     updatedAt DATETIME NOT NULL, 
     PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Workouts` 
(
    id INTEGER NOT NULL auto_increment , 
    name VARCHAR(255) NOT NULL UNIQUE, 
    sets INTEGER NOT NULL, 
    reps INTEGER NOT NULL,
     break INTEGER NOT NULL, 
     level VARCHAR(255) NOT NULL DEFAULT 'Beginner', 
     createdAt DATETIME NOT NULL, 
     updatedAt DATETIME NOT NULL,
      UserId INTEGER, 
      PRIMARY KEY (`id`), 
      FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
