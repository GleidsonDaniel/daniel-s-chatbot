# Daniel`s chatbot

Esta é uma demonstração simples de um chatbot, criado com [Express](https://expressjs.com/), [node-nlp](https://www.npmjs.com/package/node-nlp), [ReactJS](https://reactjs.org/) & [React Native](https://facebook.github.io/react-native/) utilizando [Redux](https://redux.js.org/) tanto na versão web, quanto na mobile.

## Estrutura do Projeto

```
.
├── chtbot-api
├── chatbot-ui-mobile
└── chatbot-ui-web

```

`chatbot-api`: Contém os códigos do back-end que estão escritos em Javascript (Node - Express) utilizando-se da biblioteca node-nlp  
`chatbot-ui-mobile`: Contém os codigos do front-end mobile, feito com o framework React Native + Redux  
`chatbot-ui-web`: Contém os codigos do front-end web, feito com o biblioteca ReactJs + Redux  

## Instale as bibliotecas necessarias para o funcionamento do projeto

Instale as bibliotecas em cada um dos repositorios, `./chatbot-api`, `./chatbot-ui-mobile` e `./chatbot-ui-web` usando `npm i` ou `yarn` no seu terminal.

## Como inicializar o projeto

⋅⋅* Para inicializar o front-end (web), (mobile) e back-end simultaneamente, digite no terminal `npm start` dentro da pasta raiz do projeto.

⋅⋅* Para inicializar o front-end (web) e o back-end simultaneamente, digite no terminal `npm start web` dentro da pasta raiz do projeto.

⋅⋅* Para inicializar o front-end (mobile) e o back-end simultaneamente, digite no terminal `npm start mobile` dentro da pasta raiz do projeto.

⋅⋅* Para inicializar somente o back-end, digite no seu terminal `yarn start` ou `npm start` dentro da pasta `./chatbot-api`. o servidor Express inicializa por padrão na porta `3100`.

⋅⋅* Para inicializar somente o front-end (web), digite no seu terminal `yarn start` ou `npm start` dentro da pasta `./chatbot-ui-web`.

 ⋅⋅* Para inicializar somente o front-end (mobile), digite no seu terminal `yarn start` ou `npm start` dentro da pasta `./chatbot-ui-mobile`.

## Como usar a variavel dev

Repita os passos anteriores a esse acrescentando a tag `dev` antes dos comandos do terminal.  
Exemplo: `npm start dev`

## Configurações do projeto

**Para alterar a porta do servidor Express:**
Altere a variavel `PORT`, a mesma pode ser encontrada em `./chatbot-api/.env`.

## Adicionado dados para o treinamento do bot

O mapeamento das questões e das respostas estão dentro dos arquivos `./chatbot-api/data/questions` e `./chatbot-api/data/answers`. Os dados serão então utilizados pela biblioteca [node-nlp](https://www.npmjs.com/package/node-nlp).

Para mais detalhes sobre a biblioteca `node-nlp` leia: [exemplo de uso](https://www.npmjs.com/package/node-nlp#example-of-use).  
Fornecido por [node-nlp](https://www.npmjs.com/package/node-nlp).

## Versão recomendada do Node

- Node >= 9
