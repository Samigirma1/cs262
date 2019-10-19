-------
-- Creates a database for a game of monopoly
-- NAME: SAMUEL ZELEKE
-- DATE: 18, Oct, 2019
-- CS 262 B
--
-------


DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS PlayerProperty;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer
	);

CREATE TABLE PlayerProperty (
	playerID integer REFERENCES Player(ID),
	property varchar(50),
	propertyType varchar(50),
	propertyLocation integer
);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerProperty TO PUBLIC;

-- CREATE RECORDS
INSERT INTO Game VALUES (1, '2019-10-18 08:00:00');

INSERT INTO Player VALUES (12, 'joker@warnerBrothers.com', 'Lager');
INSERT INTO Player VALUES (13, 'dKnight@wayne.com', 'Wayne');

INSERT INTO PlayerGame VALUES (1, 13, 41, 50000000);
INSERT INTO PlayerGame VALUES (1, 12, 42, 0);

INSERT INTO PlayerProperty VALUES (13, 'Estate', 'House', 0);
INSERT INTO PlayerProperty VALUES (12, 'Playing Cards', 'Sentiment', 42);

-- Return Items
SELECT COUNT(*) FROM PlayerGame;
SELECT * FROM PlayerGame;