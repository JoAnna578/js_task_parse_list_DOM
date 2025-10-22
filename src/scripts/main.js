'use strict';

// Sortuje elementy listy po pensji malejąco
function sortBySalary(items) {
  return items.sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary, 10);
    const salaryB = parseInt(b.dataset.salary, 10);
    return salaryB - salaryA;
  });
}

// Tworzy tablicę obiektów pracowników
function getEmployeesArray(items) {
  return Array.from(items).map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: parseInt(item.dataset.salary, 10),
      age: parseInt(item.dataset.age, 10)
    };
  });
}

