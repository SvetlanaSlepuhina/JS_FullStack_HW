-- Table: todo.Users

-- DROP TABLE IF EXISTS todo."Users";

CREATE TABLE IF NOT EXISTS todo."Users"
(
    id integer NOT NULL DEFAULT nextval('todo."Users_id_seq"'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Users_PK" PRIMARY KEY (id),
    CONSTRAINT "Users_UK" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo."Users"
    OWNER to postgres;

COMMENT ON TABLE todo."Users"
    IS 'Пользователи';

COMMENT ON COLUMN todo."Users".id
    IS 'Id пользователя';

COMMENT ON COLUMN todo."Users".name
    IS 'Имя пользователя';