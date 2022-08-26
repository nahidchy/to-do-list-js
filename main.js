
let count = 0;
document.getElementById('input-btn').addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById("input-value").value;
    console.log(inputValue);
    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `
      <th scope="row">${count}</th>
      <td>${inputValue}</td>
      <td>
      <button class="btn btn-primary delete-btn">Delete</button>
       <button class="btn btn-danger edit-btn">Done</button>
      </td>
    `;
    mainContainer.appendChild(tableContainer);
    document.getElementById("input-value").value = '';
    const deleteBtn = document.getElementsByClassName('delete-btn');
    for (let button of deleteBtn) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
    const editBtn = document.getElementsByClassName('edit-btn');
    for (let button of editBtn) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
            // console.log(event.target.parentNode.parentNode);
        })
    }
})
document.getElementById("clear-all").addEventListener('click', function () {
    document.getElementById('content-container').style.display = 'none';
})
