CREATE DATABASE workout_db;
USE workout_db;

CREATE TABLE beginner
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    sets int NOT NULL,
    reps int NOT NULL,
    break int NOT NULL,
	PRIMARY KEY (id)
    
);

CREATE TABLE intermediate
(
	id int NOT NULL AUTO_INCREMENT,
    sets int NOT NULL,
    reps int NOT NULL,
    break int NOT NULL,
    name_id int NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (name_id) REFERENCES beginner(id)
);

CREATE TABLE advance
(
	id int NOT NULL AUTO_INCREMENT,
    sets int NOT NULL,
    reps int NOT NULL,
    break int NOT NULL,
    name_id int NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (name_id) REFERENCES beginner(id)
);