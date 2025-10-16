# 🔐 Projeto de Login com Node.js, Express.js e MongoDB

Este projeto implementa um sistema completo de **registro e login de usuários** utilizando **Node.js**, **Express.js**, **MongoDB** e **Mongoose**.  
A autenticação é feita por meio de **JWT (JSON Web Token)**, e as senhas dos usuários são criptografadas com **bcrypt**.  
As variáveis de ambiente são gerenciadas com **dotenv**.

---

## 🧠 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **dotenv**
- **nodemon**

---

🧩 Estrutura do Projeto

## 📦 Dependências do Projeto

```json
{
  "bcrypt": "^6.0.0",
  "body-parser": "^2.2.0",
  "dotenv": "^17.2.3",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.20.0",
  "mongoose": "^8.19.1",
  "nodemon": "^3.1.10"
}

src/
 ├── config/
 │    └── connection.js        # Configuração e conexão com o MongoDB
 ├── controllers/
 │    ├── login.js             # Lógica de autenticação de login
 │    └── register.js          # Lógica de registro de usuário
 ├── routes/
 │    └── router.js            # Definição das rotas da aplicação
 └── schema/
      └── user.js              # Schema e model do usuário (Mongoose)
.env
.gitignore
package-lock.json
package.json
readme.md
server.js


⚙️ Configuração do Ambiente

Instale as dependências:

npm install


Configure o banco de dados no MongoDB Compass:

Crie a database: data_users

Dentro dela, crie a collection: users

Copie a URL de conexão e adicione ao arquivo .env, por exemplo:

MONGO_URI=mongodb://localhost:27017/data_users
JWT_SECRET=sua_chave_secreta


💡 Caso queira alterar os nomes da database ou collection, atualize também no schema e na configuração de conexão.

🚀 Executando o Servidor
Com nodemon (recomendado para desenvolvimento):
nodemon server


Se não funcionar:

npx nodemon server

Sem nodemon:
node server


O servidor será iniciado na porta definida no seu projeto (por padrão, 8000).

🧪 Testando as Rotas

Como o projeto não possui front-end, é necessário usar uma ferramenta de requisições HTTP, como:

Postman

Thunder Client (VS Code)

Envie as requisições no formato JSON:

➕ Registro de Usuário

POST http://localhost:8000/register

{
  "username": "meuusuario",
  "email": "usuario@email.com",
  "password": "minhasenha"
}

🔑 Login de Usuário

POST http://localhost:8000/login

{
  "user": "meuusuario",
  "password": "minhasenha"
}


Em caso de sucesso, o servidor retornará um token JWT que pode ser usado para autenticação nas rotas protegidas.

🧾 Observações

O arquivo .env não está listado no .gitignore por conveniência, facilitando a execução de testes por outras pessoas.

Este é um projeto de aprendizado, com foco em demonstrar os conceitos de autenticação, criptografia e integração com banco de dados.

