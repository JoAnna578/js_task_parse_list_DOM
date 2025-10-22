'use strict';

// Pobranie elementów listy
const listItems = document.querySelectorAll('li[data-name]');

// Funkcja do przekształcenia pensji w liczbę
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

// Sortowanie elementów po pensji malejąco
function sortBySalary(items) {
  return Array.from(items).sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);
    return salaryB - salaryA;
  });
}

// Tworzenie tablicy obiektów pracowników
function getEmployeesArray(items) {
  return Array.from(items).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age)
    };
  });
}

// Wywołanie funkcji
const sortedItems = sortBySalary(listItems);
window.employees = getEmployeesArray(sortedItems);

// Udostępnienie funkcji globalnie dla testów
window.sortBySalary = sortBySalary;
window.getEmployeesArray = getEmployeesArray;
