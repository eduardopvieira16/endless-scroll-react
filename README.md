# Endless Scroll React

O **Endless Scroll React** é uma aplicação desenvolvida com React que implementa a funcionalidade de scroll infinito. Essa técnica permite que novos dados sejam carregados automaticamente à medida que o usuário rola para baixo na página, proporcionando uma experiência mais fluida e contínua. A aplicação utiliza a API de usuários aleatórios para demonstrar a funcionalidade de carregamento dinâmico.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de construção e desenvolvimento rápido para aplicações front-end.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Styled-components**: Para estilização de componentes de forma dinâmica.
- **Styled-normalize e Normalize.css**: Para normalização de estilos em diferentes navegadores.

### Dependências

```json
  "dependencies": {
    "axios": "^1.7.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "styled-components": "^6.1.13",
    "styled-normalize": "^8.1.1",
    "normalize.css": "^8.0.1"
  }

```

### Dev Dependências
```json
  "devDependencies": {
    "@eslint/js": "^9.11.1",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.2",
    "eslint": "^9.11.1",
    "eslint-plugin-react": "^7.37.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.12",
    "globals": "^15.9.0",
    "vite": "^5.4.8"
  }
```

### Instruções para Rodar o Projeto

#### Utilizando yarn

```bash
    # Clonar o repositório
    $ git clone https://github.com/eduardopvieira16/endless-scroll-react.git

    # Entrar no diretório
    $ cd endless-scroll-react

    # Instalar as dependências
    $ yarn install

    # Iniciar o projeto
    $ yarn dev
```
#### Utilizando npm

```bash
    # Clonar o repositório
    $ git clone https://github.com/eduardopvieira16/endless-scroll-react.git

    # Entrar no diretório
    $ cd endless-scroll-react

    # Instalar as dependências
    $ npm install

    # Iniciar o projeto
    $ npm run dev
```

#### Funcionalidades Implementadas

- Carregamento automático de novos usuários à medida que o usuário rola para baixo.
- Exibição de informações dos usuários como nome, foto, email e país.
- Responsividade e estilo moderno utilizando styled-components.
- Utilização de Context API para separação da regra.
- Utilização também de hooks personalizado.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [ReactJS](https://reactjs.org)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Styled Normalize](https://www.npmjs.com/package/styled-normalize)

---

### Decisões Técnicas e Escolhas de Bibliotecas

- React: Utilizado por sua popularidade e eficiência na criação de interfaces dinâmicas e escaláveis, além de permitir o reuso de componentes e o gerenciamento facilitado do estado da aplicação.
- Vite: Escolhido pela sua velocidade e simplicidade no desenvolvimento, com tempos de inicialização e recarregamento rápidos, ideal para um ambiente de desenvolvimento moderno.
- Axios: Biblioteca utilizada para requisições HTTP, escolhida por sua interface simples e flexível, além de facilitar o tratamento de promessas e erros durante as interações com APIs.
- Styled-components: Optado para melhorar a modularidade e organização dos estilos, encapsulando CSS nos componentes e permitindo a criação de estilos dinâmicos baseados em props.
- Styled-normalize e Normalize.css: Utilizados para assegurar a consistência de estilos em diferentes navegadores, com styled-normalize integrando essa funcionalidade diretamente ao uso de styled-components.
