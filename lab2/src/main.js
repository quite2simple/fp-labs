import './style.css';
import { createTodo, setupTodo, serializeTodos, loadTodos } from './todo.js';

const app = document.querySelector('#app');
const todoTemplate = document.querySelector('#todo');
const todoList = document.querySelector('#todo-list');
const addTodoButton = document.querySelector('#add-todo');

const savedTodos = loadTodos(localStorage) || [];
const todoDataList = [];

const saveToLocalStorage = (todos) => localStorage.setItem('todos', serializeTodos(todos));

const newTodo = (data={}) => {
  const todo = createTodo(todoTemplate);
  const todoData = setupTodo(todo, () => saveToLocalStorage(todoDataList), data);
  todoDataList.push(todoData);
  todoList.append(todo);
  saveToLocalStorage(todoDataList);
}

for (const todoData of savedTodos) {
  newTodo(todoData);
}

addTodoButton.addEventListener('click', newTodo);