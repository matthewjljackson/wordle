CREATE TABLE words (
  word_id INT NOT NULL,
  word_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (word_id),
  UNIQUE (word_name)
);

INSERT INTO words 
    (word_id, word_name) 
VALUES 
    (1,'oxide'),
    (2,'torso'),
    (3,'hello'),
    (4,'equip'),
    (5,'mixed'),
    (6,'cloud');


CREATE TABLE letters (
  letter_id INT NOT NULL,
  letter_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (letter_id),
  UNIQUE (letter_name)
);

INSERT INTO letters 
    (letter_id, letter_name) 
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

