export default class UserTable {
  constructor(rows) {
    this.elem = render(rows)
  }
}

function makeHTML(arr) {
  return `
    <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
          </tr>
      </thead>
      <tbody>
          ${arr.map(item => `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button>X</button></td>
      </tr>
  `).join('')}
      </tbody>`

}


function render(arr) {
  const table = document.createElement("table");
  table.innerHTML = makeHTML(arr);
  const buttons = table.querySelectorAll("button")
  console.log(buttons);
  buttons.forEach(item => item.addEventListener('click', e =>
    e.target.closest("tr").remove()))


  return table;
}