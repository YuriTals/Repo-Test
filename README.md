# 🚀 Meu Projeto - Electron + React

Este projeto é um aplicativo desktop desenvolvido com **Electron** e **React**, permitindo criar interfaces modernas para aplicações nativas.

---

## 📋 Pré-requisitos
Antes de começar, você precisa ter instalado no seu sistema:

- **[Node.js](https://nodejs.org/)** (versão recomendada: LTS)
- **[Git](https://git-scm.com/)** (opcional, mas recomendado)
- **Um editor de código**, como **[VS Code](https://code.visualstudio.com/)**

---

## 🔧 Como rodar o projeto?

### 1️⃣ Clone o repositório:
Abra o terminal (cmd, PowerShell ou Git Bash) e execute:
```sh
git clone https://github.com/seu-usuario/meu-projeto.git
cd meu-projeto
```

### 2️⃣Instale as dependências:
```sh
npm install
```
### 3️⃣Construa os arquivos CSS (se aplicável):
```sh
npm run build:css
```
Isso compilará os estilos e os salvará na pasta public/.

### 4️⃣ Execute o projeto em modo desenvolvimento:
```sh
npm start
```
Isso abrirá a aplicação em uma janela Electron.

### 5️⃣ Criar um pacote para Windows:
Para gerar um .exe, execute:
```sh
npm run dist
```
Isso criará o arquivo em dist/win-unpacked/meu-projeto.exe.

---

## 🔹 Observações
O projeto utiliza:

- **Electron** para criar a aplicação desktop
- **React** para a interface
- **TailwindCSS** para estilização
- **Electron-Builder** para empacotamento do projeto

Caso ocorra erro ao executar o `.exe`, verifique se os arquivos de build foram gerados corretamente e se os caminhos dos arquivos estão corretos no `main.js`.
```sh
📦 MeuProjeto  
├── 📂 src              # Código-fonte do Electron e React  
│   ├── main.js         # Código principal do Electron  
│   ├── preload.js      # Comunicação entre Electron e Renderer  
│   ├── renderer.js     # Código do frontend  
│   ├── index.html      # Página inicial (caso não use React)  
│   ├── app.js          # Entrada principal do React (caso use)  
│   └── ...             # Outros arquivos e pastas  
├── 📂 build            # Arquivos gerados pelo React
└── ...                 # Outras pastas e arquivos
```

<div style="text-align: center;">
  💡 Feito com ❤️ por  <b>YuriTals</b>
</div>
