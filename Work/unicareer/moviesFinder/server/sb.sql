-- help  \h
-- look for all the db  \l
-- exit prior command q

-- create a new database
CREATE DATABASE moviesfinder;
--- connect to another dabase  
\c database_name

CREATE TABLE movies(
    id BIGSERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
    studio VARCHAR(50) NOT NULL,
    ratings INT NOT NULL check(ratings>=1 and ratings<=5)
);

SELECT * from movies;

INSERT INTO movies(name, studio, ratings) values ('spider man', 'marvels', '5');
INSERT INTO movies(name, studio, ratings) values ('wonder woman', 'dc', '4');
INSERT INTO movies(studio, ratings) values ('marvels', '5');

DROP TABLE movies;