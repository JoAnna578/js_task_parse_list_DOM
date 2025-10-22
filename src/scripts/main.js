'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.employees'); // lista z atrybutami data-*

  if (!list) return; // guard, jeśli lista nie istnieje

  // Funkcja sortująca elementy listy po pensji malejąco
  function sortBySalaryDesc(listElement) {
    const items = Array.from(listElement.children);
    items.sort((a, b) => Number(b.dataset.salary) - Number(a.dataset.salary));
    items.forEach(item => listElement.appendChild(item)); // aktualizacja DOM
  }

  // Funkcja zwracająca tablicę obiektów
  function getEmployeesArray(listElement) {
    return Array.from(listElement.children).map(item => ({
      name: item.dataset.name,
      position: item.dataset.position,
      salary: Number(item.dataset.salary),
      age: Number(item.dataset.age)
    }));
  }

  // Wywołanie funkcji
  sortBySalaryDesc(list);
  const employees = getEmployeesArray(list);

  // Można odkomentować, jeśli chcesz zobaczyć wynik w konsoli
  // console.log(employees);
});

