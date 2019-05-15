import model from './state/model';
import item from './components/item';
import user from './components/user';

let state = model;

// HTML elements
const usersContainer = document.getElementById('users');
const itemsContainer = document.getElementById('items');

// Render function
function render({ customers, prizes }) {
  const users = Object.entries(customers).map(([userName, userItems]) =>
    user(userName, userItems, prizes)
  );

  const items = Object.entries(prizes).map(([itemName, itemCount]) =>
    item(itemName, itemCount)
  );

  usersContainer.innerHTML = users.join('');
  itemsContainer.innerHTML = items.join('');
}

// Initial render
render(state);
