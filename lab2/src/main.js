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
let idCounter = 0;

const updateCounters = () => {
  totalCounter.innerHTML = `Total: ${todoDataList.filter((todo) => !todo.deleted).length}`;
  completedCounter.innerHTML = `Completed: ${todoDataList.filter((todo) => todo.completed && !todo.deleted).length}`;
}

const updateFiltering = () => {
  const showCompleted = todoCompletedFilter.checked;
  const showNotCompleted = todoNotCompletedFilter.checked;
  const showEmpty = todoEmptyFilter.checked;
  todoDataList.forEach((todo) => {
    if (todo.deleted) {
      return;
    }
    const todoElement = document.querySelector(`#todo-${todo.id}`);
    const showTodo = ((todo.completed && showCompleted) || (!todo.completed && showNotCompleted)) && (todo.text !== '' || showEmpty);
    console.log(`${todo.id} - ${showTodo}`);
    todoElement.style.display = (showTodo) ? 'block' : 'none'; 
  });
}

const saveToLocalStorage = (todos) => {
  localStorage.setItem('todos', serializeTodos(todos));
  updateCounters();
  updateFiltering();
};

const newTodo = (data={}) => {
  data.id = ++idCounter;
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
todoCompletedFilter.addEventListener('change', updateFiltering);
todoNotCompletedFilter.addEventListener('change', updateFiltering);
todoEmptyFilter.addEventListener('change', updateFiltering);