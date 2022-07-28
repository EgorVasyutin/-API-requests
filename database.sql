
create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(225)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(225),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

CREATE TABLE todo (
  ID SERIAL PRIMARY KEY,
  title VARCHAR(255),
  isDone BOOLEAN
);

 ALTER TABLE todo RENAME COLUMN is_done TO isDone;