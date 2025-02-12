import './style.css';
import { createTodo, setupTodo, serializeTodos, loadTodos } from './todo.js';

const app = document.querySelector('#app');
const todoTemplate = document.querySelector('#todo');
const todoList = document.querySelector('#todo-list');
const addTodoButton = document.querySelector('#add-todo');
const totalCounter = document.querySelector('#total-counter');
const completedCounter = document.querySelector('#completed-counter');
const todoCompletedFilter = document.querySelector('#todo-filter-completed');
const todoNotCompletedFilter = document.querySelector('#todo-filter-notcompleted');
const todoEmptyFilter = document.querySelector('#todo-filter-empty');

const savedTodos = loadTodos(localStorage) || [];
const todoDataList = [];

const updateCounters = () => {
  totalCounter.innerHTML = `Total: ${todoDataList.filter((todo) => !todo.deleted).length}`;
  completedCounter.innerHTML = `Completed: ${todoDataList.filter((todo) => todo.completed && !todo.deleted).length}`;
}

const saveToLocalStorage = (todos) => {
  localStorage.setItem('todos', serializeTodos(todos));
  updateCounters();
};

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