# Configuração do Ambiente de Desenvolvimento com Vite, React e React Router DOM
Este guia descreve o processo de configuração inicial de um ambiente para desenvolvimento da nossa aplicação React.

Requisitos
Certifique-se de ter instalado no seu sistema:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Visual Studio Code (recomendado para edição de código)

## Passo a Passo de Configuração

### 1. Inicialize o projeto com o Vite
Abra o terminal no VS Code.

Execute o seguinte comando para criar um novo projeto com o Vite:

```bash
npx create-vite
```
Quando aparecer uma mensagem solicitando para continuar, selecione "Ignore files and continue".

Escolha as seguintes opções:

Framework: ``React``

Variante: ``JavaScript``

### 2. Instale as dependências do projeto
Execute o comando para instalar as dependências padrão do projeto:

```bash
npm install
```
Em seguida, instale o React Router DOM:

```bash
npm install react-router-dom
```
### 3. Inicie o servidor de desenvolvimento
Execute o comando:

```bash
npm run dev
```
Após o comando ser executado, será exibido um link no formato:

```arduino
http://localhost:5173
```
Clique ou copie este link para abrir o projeto no navegador.

Pronto para desenvolver!
Agora o ambiente está configurado. Você pode começar a desenvolver sua aplicação no diretório criado. Edite os arquivos dentro da pasta src para construir sua aplicação React.
