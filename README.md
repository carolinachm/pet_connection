# pet_connection


# Projeto Node.js com Express, Sequelize e PostgreSQL

Este projeto é uma API RESTful construída usando Node.js, Express, Sequelize e PostgreSQL. Ele demonstra a criação, leitura, atualização e exclusão (CRUD) de usuários.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Configuração do Projeto](#configuração-do-projeto)
- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Execução](#execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [PostgreSQL](https://www.postgresql.org/download/)

## Configuração do Projeto

### Instalação

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

### Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL chamado `nome_do_banco`:

    ```bash
    createdb nome_do_banco
    ```

2. Configure as credenciais de conexão com o banco de dados no arquivo `.env` na raiz do projeto. Exemplo de configuração:

    ```
    DB_NAME=nome_do_banco
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_HOST=localhost
    DB_PORT=5432
    ```

### Execução

1. Para iniciar o servidor, execute o seguinte comando:

    ```bash
    npm start
    ```

2. O servidor estará em execução na porta `3000`. Acesse `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:


- **`/controllers`**: Contém os controladores responsáveis por lidar com as requisições e respostas.
- **`/db`**: Configuração do banco de dados.
- **`/models`**: Define os modelos de dados utilizando Sequelize.
- **`/repositories`**: Contém as operações de banco de dados.
- **`/routes`**: Define as rotas para a API.
- **`/services`**: Lógica de negócios para manipulação de dados.

## Endpoints da API

A API oferece os seguintes endpoints:

- `GET /api/usuario`: Lista todos os usuários.
- `GET /api/usuario/:id`: Busca um usuário pelo ID.
- `POST /api/usuario`: Cadastra um novo usuário.
- `PUT /api/usuario/:id`: Atualiza um usuário existente.
- `DELETE /api/usuario/:id`: Deleta um usuário pelo ID.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM (Object-Relational Mapper) para Node.js.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça o commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
