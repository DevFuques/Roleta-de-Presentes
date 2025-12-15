# 🎁 Sugestão de Presentes – Roleta Interativa

Este projeto é uma aplicação web simples desenvolvida com **HTML, CSS e JavaScript**, que permite **cadastrar sugestões de presentes** e realizar um **sorteio aleatório** através de uma roleta virtual.

---

## 📌 Funcionalidades

- ✅ Cadastro de presentes com:
  - Nome
  - Idade (entre 2 e 14 anos)
  - Sexo (Masculino ou Feminino)
- 📋 Listagem automática dos presentes cadastrados
- 🎡 Sorteio aleatório de um presente utilizando uma roleta
- ⚠️ Mensagem de aviso caso não existam presentes cadastrados

---

## 🧩 Estrutura do Projeto
/<br>
├── index.html # Estrutura da página<br>
├── style.css # Estilos da aplicação<br>
├── script.js # Lógica da aplicação<br>
└── README.md # Documentação do projeto<br>


---

## 🖥️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

---

## ⚙️ Como Funciona

### 📥 Cadastro de Presentes

O formulário coleta os dados do presente (nome, idade e sexo).  
Esses dados são armazenados em um array JavaScript chamado `presentes`.

### 📋 Lista de Presentes

Sempre que um novo presente é cadastrado, a lista é atualizada dinamicamente usando manipulação do DOM.

### 🎡 Roleta de Presentes

Ao clicar em **"Girar Roleta"**:

1. O sistema verifica se há presentes cadastrados
2. Exibe a mensagem “Girando...”
3. Após 1,5 segundos, sorteia um presente aleatoriamente
4. Exibe o resultado na tela

---

## 🚀 Como Executar o Projeto

1. Baixe ou clone este repositório
2. Mantenha os arquivos no mesmo diretório:
   - `index.html`
   - `style.css`
   - `script.js`
3. Abra o arquivo `index.html` em um navegador

---

## 📝 Exemplo de Uso

1. Preencha o formulário com os dados do presente
2. Clique em **Cadastrar Presente**
3. Cadastre quantos presentes desejar
4. Clique em **Girar Roleta** para realizar o sorteio 🎉

---

## 📌 Observações

- Os dados não são persistidos (são apagados ao recarregar a página)
- Projeto indicado para aprendizado de JavaScript e DOM

---

## 📄 Licença

Projeto de uso livre para fins educacionais e pessoais.
