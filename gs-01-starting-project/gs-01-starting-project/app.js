const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal(){
    const inputValue = inputEl.value;
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    listEl.appendChild(listItem);
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);