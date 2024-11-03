# TodoApp - Lista de Tarefas

## 👨🏽‍💻 Como o projeto foi desenvolvido

O projeto foi desenvolvido utilizando:

- HTML para estruturação da página
- JavaScript para toda a lógica de funcionamento e manipulação do DOM
- Tailwind CSS para estilização via CDN
- LocalStorage para persistência dos dados

A estrutura do código foi organizada em uma classe `TodoApp` que gerencia todas as operações através das seguintes funções:

- `addTodo()`: Adiciona novas tarefas
- `deleteTodo()`: Remove tarefas
- `editTodo()`: Edita tarefas existentes
- `toggleTodo()`: Marca/Desmarca tarefas como concluídas
- `saveTodos()`: Salva as tarefas no localStorage
- `renderTodos()`: Atualiza a interface com as tarefas

## 🛠️ Como executar o projeto

1. Faça o download dos arquivos do projeto
2. Abra o arquivo `index.html` em um navegador.
   - Pode ser através de duplo clique no arquivo
   - Ou arrastando o arquivo para uma janela do navegador
   - Ou usando um servidor local (como Live Server do VS Code)

## 🧮 Principais funcionalidades implementadas

1. **Gerenciamento de Tarefas**

   - Criar novas tarefas através do campo de texto
   - Visualizar lista de todas as tarefas
   - Editar tarefas existentes clicando no botão de <strong>Editar tarefa</strong>
   - Excluir tarefas através do botão de <strong>Excluir tarefa</strong>
   - Marcar tarefas como concluídas usando o checkbox

2. **Persistência**

   - Todas as tarefas são salvas automaticamente no localStorage
   - Os dados permanecem após fechar ou recarregar o navegador

3. **Interface**
   - Design responsivo que se adapta a diferentes tamanhos de tela
   - Feedback visual para tarefas concluídas (fundo verde e texto riscado)

## 🔎 Objetivo do projeto

Esse projeto tem como objetivo praticar os conhecimentos de DOM, trabalhando com manipulação e persistência de dados através do Local Storage do navegador. Projeto para conclusão da atividade 5 do terceiro módulo do curso de desenvolvimento full stack da +PraTI.
