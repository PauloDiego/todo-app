// Classe para gerenciar as tarefas
class TodoList {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.todoForm = document.querySelector('#todoForm');
        this.todoInput = document.querySelector('#todoInput');
        this.todoList = document.querySelector('#todoList');

        this.init();
    }

    init() {
        this.todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTodo();
        });

        // Carregar tarefas que existem
        this.renderTodos();
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        if (text) {
            const todo = {
                id: Date.now(),
                text,
                completed: false
            };
            this.todos.push(todo);
            this.saveTodos();
            this.renderTodos();
            this.todoInput.value = '';
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
        this.renderTodos();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.renderTodos();
        }
    }

    editTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            const newText = prompt('Editar tarefa:', todo.text);
            if (newText !== null && newText.trim() !== '') {
                todo.text = newText.trim();
                this.saveTodos();
                this.renderTodos();
            }
        }
    }

    renderTodos() {
        this.todoList.innerHTML = '';

        this.todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.className = `flex items-center justify-between p-4 bg-white rounded-lg shadow ${todo.completed ? 'bg-green-200' : ''}`;

            // checkbox de conclusão da tarefa e a tarefa
            const leftSide = document.createElement('div');
            leftSide.className = 'flex items-center gap-3';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.className = 'w-5 h-5 text-blue-500';
            checkbox.addEventListener('change', () => this.toggleTodo(todo.id));

            const text = document.createElement('span');
            text.className = `${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`;
            text.textContent = todo.text;

            leftSide.appendChild(checkbox);
            leftSide.appendChild(text);

            //Botões de editar e excluir a tarefa
            const buttons = document.createElement('div');
            buttons.className = 'flex gap-2';

            const editButton = document.createElement('button');
            editButton.className = 'p-1 text-gray-600 hover:text-blue-500';
            editButton.innerHTML = '<button class="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 focus:scale-[99%] transition-colors">Editar tarefa<button>';
            editButton.addEventListener('click', () => this.editTodo(todo.id));

            const deleteButton = document.createElement('button');
            deleteButton.className = 'p-1 text-gray-600 hover:text-red-500';
            deleteButton.innerHTML = '<button class="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 focus:scale-[99%] transition-colors">Excluir tarefa<button>';
            deleteButton.addEventListener('click', () => this.deleteTodo(todo.id));

            buttons.appendChild(editButton);
            buttons.appendChild(deleteButton);

            todoElement.appendChild(leftSide);
            todoElement.appendChild(buttons);

            this.todoList.appendChild(todoElement);
        });
    }
}

new TodoList();