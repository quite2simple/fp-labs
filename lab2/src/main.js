import './style.css';
import { createTodo, setupTodo, serializeTodos, loadTodos } from './todo.js';

const app = document.querySelector('#app');
const todoTemplate = document.querySelector('#todo');
const todoList = document.querySelector('#todo-list');
const addTodoButton = document.querySelector('#add-todo');

const todoDataList = [];

addTodoButton.addEventListener('click', () => {
  const todo = createTodo(todoTemplate);
  const todoData = setupTodo(todo, () => 'not implemented', {});
  todoDataList.push(todoData);

  todoList.append(todo);
});