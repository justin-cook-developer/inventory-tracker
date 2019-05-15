import model from './state/model';
import item from './components/item';
import user from './components/user';

let state = model;

// HTML elements
const usersContainer = document.getElementById('users');
const itemsContainer = document.getElementById('items');

// Render function
function render({ customers, prizes }) {
  const users = Object.entries(customers)
    .map(([userName, userItems]) => user(userName, userItems, prizes))
    .join('');

  const items = Object.entries(prizes)
    .map(([itemName, itemCount]) => item(itemName, itemCount))
    .join('');

  usersContainer.innerHTML = users;
  itemsContainer.innerHTML = items;
}

// Initial render
render(state);

// Event Listeners
usersContainer.addEventListener('click', e => {
  // listen for btn clicks; dispatch actions; update state; rerender
});

// add ability to add users and items; local storage? other apis?
