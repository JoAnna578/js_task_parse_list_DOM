const sortedItems = Array.from(listItems).sort((a, b) => {
  const salaryA = Number(a.dataset.salary);
  const salaryB = Number(b.dataset.salary);
  return salaryB - salaryA;
});
window.employees = sortedItems.map((item) => {
  return {
    name: item.dataset.name,
    position: item.dataset.position,
    salary: salaryB,
    age: Number(item.dataset.age)
  };
});
