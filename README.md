# 📝 Task Registration <img align="right" src="https://img.shields.io/static/v1?label=project&message=Compass&color=020202&style=for-the-badge&logo=ghost"/>
<p align="center">
<img height="250" width="850" src="https://user-images.githubusercontent.com/82064724/152649221-b84e4e04-e5af-4e13-b774-b6bc347ff30e.gif">
</p>

Bem-vindo(a)!!

Opa dev tudo bem?! Este projeto foi o primeiro desafio do programa de bolsas da compass, onde este [time](#-Autores) estará refazendo o desafio, com o conhecimento um pouco mais avançado que da primeira vez, utilizando o usando scrum. Espero que goste!!

Vamos ao projeto! `#dreamBigger🚀💛`

<br>

> <b>Status code:</b>  Finalizada!! ✔

 ## <img height="18" width="18" src="https://user-images.githubusercontent.com/82064724/151113975-e8ff6813-b253-4670-b626-80e842363ab2.png">Indice
<!--ts-->
   * [🧠 Contexto](#-Contexto)
     * [Rotas](#-Project)
   * [📥 Baixar e executar o projeto](#-Baixar-e-executar-o-projeto)
     * [Setup da aplicação](#-setup-da-aplicação)
     * [Iniciando a aplicação](#-iniciando-a-aplicação)
   * [🧪 Testando rotas](#-testando-rotas)
   * [🛠 Tecnologias](#-tecnologias)
   * [✍🏼 Autores](#-Autores)
   * [📝 Licença](#-licença)
   * [🎁 Bonus](#-Bonus)
<!--te-->

 ---

 ## 🧠 Contexto
> **Característica do Desafio:** 🚧  *API REST FULL*  🚧

Este [desafio](https://github.com/br3nds0n/project/files/8007925/Desafio01-Sprint02.pdf) será a criação de um "trelo" ou "bloco de notas" para o cadastro de tasks. Nesta API terá os fluxos de:

 * Interação de métodos http. (criar, buscar, editar e remover);
 * Busca por query params;
 * Paginação;


 ### 📔 Project
> Rota: `http://localhost:<PORT>/api/v1/project`

| Id        | Request                                        | Endpoint                 |
|-----------| -----------------------------------------------| -------------------------|
|1          |  [POST](#post-httplocalhost3000apiv1car)       | cadastrar um projeto     |
|2          |  [GET](#get-httplocalhost3000apiv1car)         | listar todos projetos    |
|3          |  [DELETE](#delete-httplocalhost3000apiv1carid) | remover um projeto       |
|4          |  [PUT](#put-httplocalhost3000apiv1carid)       | atualiza um projeto      |
|5          |  [GET/:id](#getid--httplocalhost3000apiv1carid)| buscar um projeto        |

<br>

[<Back](#indice)

---

## 📥 Baixar e executar o projeto

###  Pré-requisitos


Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postman](https://www.postman.com/downloads/) e [MongoDB](https://www.mongodb.com/pt-br).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).


### 💻 Setup da aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/br3nds0n/Deep-web-Group.git>

# Acesse a pasta do projeto no terminal
$ cd Deep-web-Group

# Instale as dependências
$ npm install
```

#

### ⚙ Configurar as variáveis de ambiente
> Será necessário criar na raiz do projeto um arquivo `.env` configurar as variáveis. Exemplo:

```bash
# Porta que o servidor irá rodar.
PORT=3000

# Endereço para conectar com o Mongo.
# Exemplo:
DB_HOST=mongodb://localhost:27017/<name>
```

#

### ▶ Iniciando a aplicação
> Após configurar as variáveis ambientes no `.env`. Iremos executar o seguinte comando para rodar a aplicação:
```bash
# Rodando em modo de produção
$ npm start


# Rodando em modo de produção
$ npm run dev

# O projeto inciará na porta:<PORT> - acesse <http://localhost:<PORT>/api/v1/> no postman
```
<br>

[<Back](#indice)

---

## 🧪 Testando rotas
> Para testar as rotas abra um novo terminal:
```bash
# Use o script de tests
$ npm run test

# Será rodado os testes de feature no terminal
```
> Resultado esperado:
<img src="https://user-images.githubusercontent.com/82064724/152653882-e9696e77-4059-440c-b27c-2f3670a4d9bf.png">

<br>

[<Back](#indice)

---
## 🛠 Tecnologias

As seguintes ferramentas/tecnologias foram usadas na construção e testagem do projeto. Clicando no icone da tecnologia, você será redirecionado para o site oficial para instalação: <br>

| logo               | Framework                  | Version      |
| :----------------- | :------------------------- | :----------: |
| <a href="https://nodejs.org/pt-br/download/" target="_blank"><img align="center" alt="nodeJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a>                   | NodeJs                     |  `16.13.1`      |
| <a href="https://www.mongodb.com/try/download/community" target="_blank"><img align="center" alt="mongo" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg"></a>            | MongoDB                      |  `5.0.5`       |
| <a href="https://www.postman.com/downloads/" target="_blank"><img align="center" alt="postman" height="30" width="30" src="https://user-images.githubusercontent.com/82064724/147416090-89b4e7a3-2b78-417a-a154-f47940d23e38.png">            | Postman                    |  `9.6.2`       |
| <a href="https://code.visualstudio.com/download" target="_blank"><img align="center" alt="VsCode" height="25" width="35" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg"></a> | VsCode | `1.63.2` |

 <br>
 
[<Back](#indice)
 
---
  
## ✍🏼 Autores

<div align=left>

- <table>
 <p>  Desenvolvido por:</p>
  <tr align=center>
    <th><strong> ☠️ Deep Web Group </strong></th>
    <th><strong> 💻Brendson Victor </strong></th>
    <th><strong> 💻Italo David </strong></th>
    <th><strong> 💻Matheus Lopes </strong></th>
  </tr>
 <td>
      <a href="https://github.com/br3nds0n/Deep-web-Group">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/152639816-afca933a-f182-4826-acb4-f9d74b08e422.png" > <p align="left">
</p></a>
    <p align="center">Empresa</p>
    </td>
   <td>
      <a href="https://github.com/br3nds0n">
        <img width="168" height="140" src="https://media-exp1.licdn.com/dms/image/C4D03AQEEcv8U2Gtelg/profile-displayphoto-shrink_200_200/0/1639870971995?e=1648684800&v=beta&t=C5q0hXTUQDtBbMAJd1zIle008VvKvnzulFoS6BSschs" > <p align="left">
</p></a>
    <p align="center">Developer</p>
    </td>
   <td>
      <a href="https://github.com/ItaloDavidb">
        <img width="168" height="140" src="https://avatars.githubusercontent.com/u/66899399?v=4" > <p align="left">
</p></a>
    <p align="center">Developer</p>
    </td>
   <td>
      <a href="https://github.com/MathLopes1">
        <img width="168" height="140" src="https://avatars.githubusercontent.com/u/70352508?v=4" > <p align="left">
</p></a>
    <p align="center">Developer</p>
    </td>
  </tr>
</table>
</div>

<div align=left>
 
<br>
                 
---
 
## 📝 LICENÇA

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.

 [<Back](#-task-registration-)
 
 <br>

## 🎁 Bonus
  
  <img width="900" height="300" src="https://memegenerator.net/img/instances/73593001/l-vem-o-programador-html-e-javascript.jpg">
