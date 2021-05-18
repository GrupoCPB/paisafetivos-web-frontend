<div align="center" id="top"> 
  &#xa0;
</div>

<h1>Ong Pais Afetivos | Grupo CPB</h1>

<p>
  

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/GrupoCPB/siteonglgbtmaisdobrasil?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/GrupoCPB/siteonglgbtmaisdobrasil?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/GrupoCPB/siteonglgbtmaisdobrasil?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/GrupoCPB/siteonglgbtmaisdobrasil?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/GrupoCPB/siteonglgbtmaisdobrasil?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/GrupoCPB/siteonglgbtmaisdobrasil?color=56BEB8" />

## :rocket: Technologies ##

- [ReactJS](https://pt-br.reactjs.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React-Router-Dom](https://reactrouter.com)
- [CSS3](https://www.w3schools.com/css/)

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/GrupoCPB/FrontSiteONGPaisAfetivos

# Access
$ cd frontsiteongpaisafetivos

# Install dependencies
$ yarn / npm install

# Run the project
$ yarn start / npm start

# The server will initialize in the <http://localhost:3000>
```

## Project Structure

```
src/
 |--- assets/       # Imagens
 |--- components/   # Componentes
 |--- configs/      # Variáveis de configurações
 |--- contexts/     # Contextos
 |--- pages/        # Páginas
 |--- services/     # Configuração de serviços utilizados
 |--- styles/       # Estilos globais
 |--- App.js        # Arquivo com configurações principais do App
 |--- index.js      # Ponto de entrada para execução do nosso App
 |--- Routes.js     # Arquivo contendo as principais rotas do App
```

## Logbook

### Criando a aplicação com create-react-app

--> A criação de aplicações em React do zero, com as configurações do Webpack e do Babel e de todo o ambiente de desenvolvimento é bem interessante, pois deixa o ambiente customizável de acordo com as necessidades do seu projeto. Mas em alguns casos, o create-react-app facilita muito a vida por trazer boa parte dessas definições previamente configuradas. Portanto, utilizamos o seguinte comando para a criação da aplicação:

```
$ yarn / npm create react-app  frontsiteongpaisafetivos
```


### Licença

--> Por ser uma aplicação a ser utilizada posteriormente, a escolha da licensa foi a MIT, que torna disponível o uso comercial e privado, além de modificação e distribuição da aplicação, mas detém os direitos autorais.

### Styled-components

--> A escolha do styled-components vem pela facilidade de customização de estilo através da criação de componentes estilizados utilizando javascript, é um recurso super interessante e poderoso, já que reduz o uso de classes e id's para determinação de estilos, problemas de acesso aos arquivos CSS e torna a legibilidade do código muito mais fácil de interpretar.
--> Uma das vantagens da utilização do styled-components é que, assim como o sass, também permite o uso do encadeamento, ou seja, caso um elemento possua um outro elemento como filho, é possível realizar a estilização do mesmo dentro da estilização desse componente.
--> Outra vantagem é a utilização da estilização limitada ao escopo em que o componente estilizado foi criado. Ele acaba gerando uma classe com uma chave única para que a estilização daquele componente não interfira no restante da aplicação.
