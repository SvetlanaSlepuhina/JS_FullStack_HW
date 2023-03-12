-- Table: todo.Lists

-- DROP TABLE IF EXISTS todo."Lists";

CREATE TABLE IF NOT EXISTS todo."Lists"
(
    id integer NOT NULL DEFAULT nextval('todo."Lists_id_seq"'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    is_active boolean NOT NULL DEFAULT true,
    users_id integer NOT NULL,
    CONSTRAINT "Lists_PK" PRIMARY KEY (id),
    CONSTRAINT "Lists_UK" UNIQUE (name, is_active, users_id),
    CONSTRAINT "Lists_Users" FOREIGN KEY (users_id)
        REFERENCES todo."Users" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo."Lists"
    OWNER to postgres;

COMMENT ON TABLE todo."Lists"
    IS 'Списки';

COMMENT ON COLUMN todo."Lists".id
    IS 'Id списка';

COMMENT ON COLUMN todo."Lists".name
    IS 'Наименование';

COMMENT ON COLUMN todo."Lists".is_active
    IS 'Активен / Закрыт';

COMMENT ON COLUMN todo."Lists".users_id
    IS 'Id владельца';