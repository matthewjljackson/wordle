-- Creating the words table
CREATE TABLE "Word" (
  id INT NOT NULL,
  word VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (word)
);

-- Adding words into the table
INSERT INTO "Word"
    (id, word) 
VALUES 
    (1,'oxide'),
    (2,'torso'),
    (3,'hello'),
    (5,'mixed'),
    (6,'cloud');

-- Creating the letters table
CREATE TABLE "Letter" (
  id INT NOT NULL,
  key VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (key)
);

-- Adding letters into the table
INSERT INTO "Letter"
    (id, key) 
VALUES 
    (1,'a'),
    (2,'b'),
    (3,'c'),
    (4,'d'),
    (5,'e'),
    (6,'f'),
    (7,'g'),
    (8,'h'),
    (9,'i'),
    (10,'j'),
    (11,'k'),
    (12,'l'),
    (13,'m'),
    (14,'n'),
    (15,'o'),
    (16,'p'),
    (17,'q'),
    (18,'r'),
    (19,'s'),
    (20,'t'),
    (21,'u'),
    (22,'v'),
    (23,'w'),
    (24,'x'),
    (25,'y'),
    (26,'z');

