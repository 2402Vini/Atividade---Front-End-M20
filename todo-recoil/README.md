# 🧠 To-Do List com Recoil

Aplicação de lista de tarefas desenvolvida em React utilizando **Recoil** para gerenciamento de estado global.

---

## 🚀 Demonstração

> Projeto rodando localmente em:
> `http://localhost:5173`

---

## 🎯 Objetivo

Este projeto foi desenvolvido como prática dos conceitos de:

* Gerenciamento de estado global com Recoil
* Uso de átomos (atoms) e seletores (selectors)
* Componentização em React
* Manipulação de listas e eventos

---

## 🛠️ Tecnologias utilizadas

* React
* Vite
* Recoil
* JavaScript (ES6+)
* HTML5 & CSS3

---

## 📁 Estrutura do projeto

```
src/
├── atoms/
│   └── todoAtoms.js
├── selectors/
│   └── todoSelectors.js
├── components/
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   └── TodoFilters.jsx
├── App.jsx
└── main.jsx
```

---

## ⚙️ Funcionalidades

* ✅ Adicionar novas tarefas
* 📋 Listar tarefas
* ✔️ Marcar como concluída
* ❌ Remover tarefas
* 🔍 Filtrar tarefas:

  * Todas
  * Concluídas
  * Pendentes

---

## 🧠 Gerenciamento de Estado (Recoil)

* **Atom (`todoListState`)**
  Responsável por armazenar a lista de tarefas.

* **Atom (`filterState`)**
  Controla o filtro atual da aplicação.

* **Selector (`filteredTodoListState`)**
  Retorna a lista de tarefas com base no filtro selecionado.

---

## ▶️ Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/todo-recoil.git

# Acesse a pasta
cd todo-recoil

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 💡 Melhorias futuras

* Persistência com localStorage
* Interface com Tailwind CSS
* Animações
* Contador de tarefas
* Edição de tarefas

---

## 📌 Status do projeto

✅ Concluído (versão inicial)

---

## 👨‍💻 Autor

Desenvolvido por **Vinicius Aparecido Rigo**

---

## 📄 Licença

Este projeto está sob a licença MIT.