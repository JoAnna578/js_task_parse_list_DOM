'use strict';

// Funkcja do konwersji pensji "$123,456" na liczbę
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

// Funkcja sortująca elementy po pensji malejąco i przenosząca je w DOM
function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li[data-position]'));
  const sortedItems = items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary)
  );

  // Przeniesienie elementów w DOM w nowej kolejności
  sortedItems.forEach((item) => listElement.appendChild(item));

  return sortedItems;
}

// Funkcja tworząca tablicę obiektów pracowników
function getEmployees(listElement) {
  const items = listElement.querySelectorAll('li[data-position]');
  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Pobranie elementu listy <ul>
const list = document.querySelector('ul');

// Wywołanie funkcji
const sortedItems = sortList(list);
window.employees = getEmployees(list);

// Udostępnienie funkcji globalnie dla testów
window.sortList = sortList;
window.getEmployees = getEmployees;



