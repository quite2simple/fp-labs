export const createTodo = (template) => {
    const clone = template.content.cloneNode(true);
    return clone.firstElementChild;
}

export const setupTodo = (todo, onChange, data) => {
    const todoCompleted = todo.querySelector('.todo-completed');
    const todoText = todo.querySelector('.todo-text');
    const todoDelete = todo.querySelector('.todo-delete');

    const todoData = {
        completed: data.completed,
        text: data.checked,
        deleted: false
    };

    todoCompleted.addEventListener('change', () => {
        todoData.completed = todoCompleted.checked;
        onChange();
    });
    todoText.addEventListener('input', () => todoData.text = todoText.value);
    todoDelete.addEventListener('click', () => {
        todoData.deleted = true;
        onChange();
        todo.remove();
    });

    return todoData;
}

export const serializeTodos = (todos) => {
    return JSON.stringify(todos.filter((todo) => !todo.deleted));
}

export const loadTodos = (storage) => {
    const todos = JSON.parse(storage.getItem('todos'));
    return todos;
}