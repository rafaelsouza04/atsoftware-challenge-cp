-- Cria o banco de dados 'empresa' se ainda não existir
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'empresa') THEN
        PERFORM pg_terminate_backend(pg_stat_activity.pid)
        FROM pg_stat_activity
        WHERE datname = 'empresa';
        EXECUTE 'CREATE DATABASE empresa';
    END IF;
END
$$;

-- Conecta ao banco de dados 'empresa'
\c empresa;

-- Cria a tabela 'maquinas'
CREATE TABLE maquinas (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image BYTEA
);
