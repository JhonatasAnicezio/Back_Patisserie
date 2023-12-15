
# Back Patisserie

Este é um projeto simples de gerenciamento de usuários em uma API RESTfull desenvolvido em TypeScript utilizando o Sequelize ORM e MySQL como banco de dados. A arquitetura adotada foi a MSC (Model-Service-Controller), onde as responsabilidades foram divididas em módulos distintos, tornando o projeto organizado e escalável.

As rotas disponíveis na API incluem cadastro de usuário, login de usuário e admin, atualização de informações do usuário e deleção de usuário (somente para administradores). Este projeto foi desenvolvido com o intuito de servir como exemplo para estudos e aprendizado sobre desenvolvimento de APIs em TypeScript com banco de dados MySQL.


## Tecnologias

  - Node.js
  - TypeScript
  - Sequelize
  - Arquitetura MSC
  - MySQL
## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:JhonatasAnicezio/Back_Patisserie.git
```

Entre no diretório do projeto

```bash
  cd Back_Patisserie
```

Instale as dependências

```bash
  npm install
```

Realize a construção do projeto

```bash
  npm run build
```

Inicie o servidor

```bash
  npm run start
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`JWT_SECRET`

Lembrando que você precisa de um banco MySQL para rodar a api

`MYSQLUSER`
`MYSQLPASSWORD`
`MYSQLDATABASE`
`MYSQLHOST`
`MYSQLPORT`


## Documentação da API

#### Retorna todos os usuarios

```bash
  GET /user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna os dados do usuário de acordo com o token

```bash
  GET /user/me

  header: {
    "authorization": "token",
  }
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `authorization`      | `string` | **Obrigatório**. O token gerado pelo login ou register |

#### Retorna um token referente ao usuário do login

```bash
  POST /user/login

  body: {
    "email": "user@user.com",
    "password": "secret_user"
  }
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|  `email`      | `string` | **Obrigatório**. O email do seu usuário |
|  `password`      | `string` | **Obrigatório**. A senha do seu usuário |

#### Realiza o cadastro de um novo usuário e em seguida retorna um token refente ao usuário do login

```bash
  POST /user/

  body: {
    "email": "venenozo@gmail.com",
    "password": "mod100%feliz",
    "name": "Kageyama Mob",
    "role": "user"
  }
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|  `email`      | `string` | **Obrigatório**. O email do seu usuário |
|  `password`      | `string` | **Obrigatório**. A senha do seu usuário |
|  `name`      | `string` | **Obrigatório**. O nome do seu usuário |
|  `role`      | `string` | **Obrigatório**. A role do seu usuário |

#### Remove o um usuário de acordo com o seu id

```bash
  DELETE /api/user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|  `id`      | `string` | **Obrigatório**. ID do usuário que deseja apagar |

#### Atualiza a role de um usuário de acordo com seu id

```bash
  PUT /api/user/${id}

  body: {
    "role": "admin"
  }
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|  `id`      | `string` | **Obrigatório**. ID do usuário que deseja atualizar |
|  `body`      | `string` | **Obrigatório**. A nova role do usuário |





## Autor

#### Jhonatas Anicezio

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JhonatasAnicezio)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jhonatas-anicezio/)
