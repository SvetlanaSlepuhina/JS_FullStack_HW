-- Table: todo.Tasks

-- DROP TABLE IF EXISTS todo."Tasks";

CREATE TABLE IF NOT EXISTS todo."Tasks"
(
    id integer NOT NULL DEFAULT nextval('todo."Tasks_id_seq"'::regclass),
    list_id integer NOT NULL,
    tasks_id integer,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    note text COLLATE pg_catalog."default",
    is_active boolean,
    dt date,
    tm time with time zone,
    flag boolean DEFAULT false,
    CONSTRAINT "Tasks_pkey" PRIMARY KEY (id),
    CONSTRAINT "Tasks_UK" UNIQUE (name, list_id, is_active),
    CONSTRAINT "Tasks_Lists_FK" FOREIGN KEY (list_id)
        REFERENCES todo."Lists" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo."Tasks"
    OWNER to postgres;

COMMENT ON TABLE todo."Tasks"
    IS 'Задачи';

COMMENT ON COLUMN todo."Tasks".id
    IS 'Id задачи';

COMMENT ON COLUMN todo."Tasks".list_id
    IS 'Id списка';

COMMENT ON COLUMN todo."Tasks".tasks_id
    IS 'Id основной задачи';

COMMENT ON COLUMN todo."Tasks".name
    IS 'Наименование';

COMMENT ON COLUMN todo."Tasks".note
    IS 'Пояснение';

COMMENT ON COLUMN todo."Tasks".is_active
    IS 'Активена / Закрыта';

COMMENT ON COLUMN todo."Tasks".dt
    IS 'Дата выполнения';

COMMENT ON COLUMN todo."Tasks".tm
    IS 'Время выполнения';

COMMENT ON COLUMN todo."Tasks".flag
    IS 'Важная / Обычная';

COMMENT ON CONSTRAINT "Tasks_Lists_FK" ON todo."Tasks"
    IS 'ID списка';