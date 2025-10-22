'use strict';

// Pobieramy wszystkie elementy listy
const items = document.querySelectorAll('.employee-list li');

// Funkcja pomocnicza do pobrania wartości salary z atrybutu data
const getSalary = el => parseInt(el.dataset.salary, 10);

// Sortujemy elementy po salary malejąco
const sortedItems = Array.from(items).sort((a, b) => getSalary(b) - getSalary(a));

// Tworzymy tablicę obiektów employees
const employees = sortedItems.map(el => ({
  name: el.dataset.name,
  position: el.dataset.position,
  salary: getSalary(el),
  age: parseInt(el.dataset.age, 10)
}));

// Możesz sprawdzić wynik w konsoli
console.log(employees);

