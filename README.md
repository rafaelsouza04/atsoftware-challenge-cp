# Desafio de Programação Back-End: Node.js + Express.js + TypeScript

Este repositório contém um setup inicial para um projeto back-end utilizando Node.js e TypeScript. O objetivo deste desafio é desenvolver um CRUD completo para máquinas industriais.

## Estrutura do Projeto
A estrutura do projeto foi criada utilizando TypeScript. Para mais detalhes sobre como iniciar um projeto com TypeScript, consulte o [tutorial da DigitalOcean](https://www.digitalocean.com/community/tutorials/typescript-new-project).

## Desafio

### Banco de Dados
Os bancos de dados que podem ser utilizados nesse desafio são

- [PostgreSQL](https://www.postgresql.org/)
- [MySQL](https://www.mysql.com/)

O banco de dados deve conter as seguintes tabelas

#### machines

- id: inteiro
- name: texto
- image: binário

### API

A API deve conter as seguintes rotas para gerenciamento de máquinas:

- **GET /machine**: Recuperar uma lista de todas as máquinas.
- **GET /machine/:machineId**: Recuperar detalhes de uma máquina específica pelo ID.
- **POST /machine**: Criar uma nova máquina.
- **PUT /machine/:machineId**: Atualizar os dados de uma máquina existente pelo ID.
- **DELETE /machine/:machineId**: Realiza a deleção de uma máquina existente pelo ID.

### Conteinerização

Após o desenvolvimento das aplicações back-end e front-end, ambas devem ser conteinerizadas utilizando 
[Docker](https://www.docker.com/)

O que deve ser criado nessa etapa

- Arquivo DockerFile da aplicação back-end

## Requisitos

### Obrigatório

- Desenvolva o projeto utilizando Node.js, Express e TypeScript.

### Opcional

- Adicione quaisquer bibliotecas ou ferramentas adicionais que considere úteis para a melhoria do projeto.
- Além dos requisitos obrigatórios, você está livre para escolher os design patterns e bibliotecas que irá utilizar. Faça essa escolha com base nas tecnologias que você já tem experiência.

## Referências
- [PostgreSQL](https://www.postgresql.org/)
- [MySQL](https://www.mysql.com/)
- [Salvando imagens no PostgreSQL](https://www.postgresql.org/docs/7.4/jdbc-binary-data.html)
- [Node](https://nodejs.org/docs/latest/api/documentation.html)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Docker](https://www.docker.com/)
- [Conteinerização](https://www.docker.com/resources/what-container/)
