'use strict';

// Pobranie listy i elementów li
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('ul li[data-position]');

// Funkcja do konwersji pensji "$123,456" na liczbę
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

// Funkcja sortująca elementy po pensji malejąco
function sortBySalary(items) {
  return Array.from(items).sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary)
  );
}

// Funkcja tworząca tablicę obiektów pracowników
function getEmployeesArray(items) {
  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age)
  }));
}

// Sortowanie elementów
const sortedItems = sortBySalary(listItems);

// Przeniesienie elementów w DOM w kolejności malejącej
sortedItems.forEach((item) => list.appendChild(item));

// Tworzenie tablicy employees i przypisanie do window
window.employees = getEmployeesArray(sortedItems);

// Udostępnienie funkcji globalnie dla testów
window.sortBySalary = () => sortedItems;
window.getEmployeesArray = () => window.employees;


