--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
-- 
-- Student Name: Samuel Zeleke
-- Section:      CS262-B
-- 				 Lab 08
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerProperty cascade;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
-- Create the schema.
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

-- Add sample records.
INSERT INTO Game VALUES (1, '2019-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (3, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (4, '2006-06-29 18:41:00');
INSERT INTO Game VALUES (5, '2019-10-24 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (4, 'me@calvin.edu');
INSERT INTO Player VALUES (5, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (6, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 4, 0.00);
INSERT INTO PlayerGame VALUES (1, 5, 0.00);
INSERT INTO PlayerGame VALUES (1, 6, 2350.00);
INSERT INTO PlayerGame VALUES (2, 4, 1000.00);
INSERT INTO PlayerGame VALUES (2, 5, 0.00);
INSERT INTO PlayerGame VALUES (2, 6, 500.00);
INSERT INTO PlayerGame VALUES (3, 4, 0.00);
INSERT INTO PlayerGame VALUES (3, 5, 5500.00);

INSERT INTO PlayerProperty VALUES (4, 'Villa', 'house', 40);


------------------------------------------------------------
---						Exercise 8.1				     ---
------------------------------------------------------------
--a. Retrieve a list of all the games, ordered by date... --
SELECT * 
FROM Game 
ORDER BY time DESC; 
--b. Retrieve all the games that occurred in the past...  --
SELECT *
FROM Game
WHERE  DATE_PART('day', CURRENT_TIMESTAMP - Game.time) < 7
AND DATE_PART('day', CURRENT_TIMESTAMP - Game.time) >= 0;
--c. Retrieve a list of players who have (non-NULL)...    --
SELECT *
FROM PlayerGame
WHERE name IS NOT NULL;
--d. Retrieve a list of IDs for players who have some...  --
SELECT PlayerID
FROM PlayerGame
WHERE score > 2000;
--e. Retrieve a list of players who have GMail accounts.  --
SELECT *
FROM Player
WHERE emailAddress LIKE '%gmail%';

------------------------------------------------------------
---						Exercise 8.2				     ---
------------------------------------------------------------
--a. Retrieve all “The King”’s game scores in decreasi... --
SELECT score
FROM PlayerGame, Player
WHERE name = 'The King'
AND Player.ID = PlayerGame.playerID
ORDER BY score DESC;
--b. Retrieve the name of the winner of the game playe... --
SELECT Player.name
FROM Player, PlayerGame, Game
WHERE Game.time = '2006-06-28 13:20:00'
AND Game.ID = PlayerGame.gameID
AND Player.ID = PlayerGame.playerID;
--c. So what does that P1.ID < P2.ID clause do in the...  --
--
--	ANSWER:
-- 		The query returns the nae of the player with the
--      the highest player ID value.
--
--d. The query that joined the Player table to itself...  --
--
--	ANSWER:
--		We may need to do this when we have a queriy that
--		should compare records wthin the same table.
--
------------------------------------------------------------