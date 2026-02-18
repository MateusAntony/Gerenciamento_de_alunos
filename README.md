#  Sistema de Gerenciamento de Alunos

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
</p>

<p align="center">
  Aplicação web fullstack para gerenciamento acadêmico de estudantes, com cadastro de alunos, lançamento de notas, controle de faltas e cálculo automático de média final.
</p>

---

##  Demonstração

> A aplicação roda localmente com o backend na porta `5000` e o frontend na porta `3000`.

### Tela inicial — Listagem de Alunos
> Lista todos os estudantes cadastrados com opções de visualizar detalhes, lançar notas e excluir.

### Tela de Cadastro
> Formulário para adicionar um novo estudante com nome, e-mail, gênero e idade.

### Tela de Detalhes
> Exibe informações pessoais e desempenho acadêmico do aluno, com média calculada automaticamente e indicação visual de aprovação (verde) ou reprovação (vermelho).

### Tela de Notas
> Formulário para lançar ou atualizar as três notas e o total de faltas de um estudante.

---

##  Tecnologias Utilizadas

### Frontend
| Tecnologia | Função |
|---|---|
| **React** | Biblioteca principal para construção da interface |
| **React Router DOM** | Navegação entre as páginas da aplicação |
| **Axios** | Comunicação HTTP com a API REST |
| **Bootstrap 5** | Estilização responsiva dos componentes |
| **SweetAlert2** | Alertas de confirmação elegantes ao usuário |

### Backend
| Tecnologia | Função |
|---|---|
| **Node.js** | Ambiente de execução JavaScript no servidor |
| **Express 5** | Framework para criação da API REST |
| **MySQL2** | Driver de comunicação com o banco de dados |
| **CORS** | Liberação de requisições entre origens diferentes |
| **Nodemon** | Hot reload durante o desenvolvimento |

### Banco de Dados
| Tecnologia | Função |
|---|---|
| **MySQL** | Banco de dados relacional para persistência dos dados |


##  Banco de Dados


### Estrutura da tabela

```sql
CREATE DATABASE estudantes;

USE estudantes;

CREATE TABLE estudantesdetails (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  nome    VARCHAR(100),
  email   VARCHAR(100),
  idade   INT,
  genero  VARCHAR(20),
  nota1   DECIMAL(5,2),
  nota2   DECIMAL(5,2),
  nota3   DECIMAL(5,2),
  faltas  INT
);
```

---

##  Endpoints da API

Base URL: `http://localhost:5000`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/estudantes` | Lista todos os estudantes |
| `GET` | `/read/:id` | Busca um estudante pelo ID |
| `POST` | `/add_user` | Cadastra um novo estudante |
| `PUT` | `/update_notas/:id` | Atualiza notas e faltas de um estudante |

### Exemplo — Cadastrar estudante

**POST** `/add_user`
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 20,
  "gender": "Masculino"
}
```

### Exemplo — Atualizar notas

**PUT** `/update_notas/1`
```json
{
  "nota1": 8.5,
  "nota2": 7.0,
  "nota3": 9.0,
  "faltas": 2
}
```

---

##  Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [MySQL](https://www.mysql.com/) instalado e rodando
- Banco de dados e tabela criados conforme o script acima

---

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/gerenciamento-alunos.git
cd gerenciamento-alunos
```

### 2. Configure e inicie o Backend

```bash
cd server
npm install
```

Abra o arquivo `server.js` e configure as credenciais do seu banco:

```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'estudantes'
});
```

Inicie o servidor:

```bash
npm run dev     # com hot reload (nodemon)
# ou
npm start       # modo normal
```

> O servidor estará disponível em: `http://localhost:5000`

---

### 3. Configure e inicie o Frontend

```bash
cd client
npm install
npm start
```

> A aplicação estará disponível em: `http://localhost:3000`

---

##  Funcionalidades

- [x] Listagem de todos os estudantes cadastrados
- [x] Cadastro de novo estudante (nome, e-mail, idade, gênero)
- [x] Visualização detalhada do estudante
- [x] Lançamento e atualização de notas (nota 1, nota 2, nota 3)
- [x] Controle de faltas
- [x] Cálculo automático da média final
- [x] Indicação visual de aprovação (média ≥ 7) ou reprovação
- [x] Alertas de confirmação com SweetAlert2
- [ ] Edição de dados cadastrais do estudante *(em desenvolvimento)*

---

##  Lógica de Aprovação

A média final é calculada automaticamente com base nas três notas:

```js
const media = (nota1 + nota2 + nota3) / 3
```

| Média | Situação |
|---|---|
| ≥ 7.0 | ✅ Aprovado (exibido em verde) |
| < 7.0 | ❌ Reprovado (exibido em vermelho) |

---

##  Aprendizados e Destaques Técnicos

- Desenvolvimento **fullstack** com separação clara entre frontend e backend
- Criação de uma **API REST** com Node.js e Express, seguindo os verbos HTTP corretamente
- **Consumo de API** no frontend com Axios e gerenciamento de estado com hooks do React (`useState`, `useEffect`)
- **Roteamento** com React Router DOM para navegação entre páginas sem recarregamento
- Componentização e reaproveitamento de código com React
- Tratamento de **feedback ao usuário** com SweetAlert2
- Uso de **Bootstrap** para layout responsivo

---

