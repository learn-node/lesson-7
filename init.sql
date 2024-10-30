CREATE TABLE Students
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Users
(
    ID    SERIAL PRIMARY KEY,
    Name  VARCHAR(100),
    Email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS UserPreferences
(
    PreferenceID           SERIAL PRIMARY KEY,
    LanguageCode           VARCHAR(100),
    PreferredCommunication INT,
    UserId                 INT,
    FOREIGN KEY (UserId) REFERENCES Users (ID)
);

CREATE OR REPLACE PROCEDURE add_student(c_name VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO students (name) VALUES (c_name);
END;
$$;

CALL add_student('John Doe');

CALL add_student('John Doe 2');

CALL add_student('John Doe');


-- ALTER TABLE users ADD UNIQUE (name)
-- ALTER TABLE users ALTER COLUMN name SET NOT NULL;