import model from './state/model';
import Item from './components/item';
import User from './components/comp';
import actions from './state/actions';
import reducer from './state/reducer';

let state = model;

// HTML elements
const usersContainer = document.getElementById('users');
const itemsContainer = document.getElementById('items');

// Render function
function render({ customers, prizes }) {
  const users = Object.entries(customers)
    .map(([userName, userItems]) => User(userName, userItems, prizes))
    .join('');

  const items = Object.entries(prizes)
    .map(([itemName, itemCount]) => Item(itemName, itemCount))
    .join('');

  usersContainer.innerHTML = users;
  itemsContainer.innerHTML = items;
}

// Initial render
render(state);

// Event Listeners
usersContainer.addEventListener('click', e => {
  const action = e.target.dataset.action;

  if (action !== 'decrement' && action !== 'increment') {
    return;
  }

  const { item, user } = e.target.parentNode.dataset;
  const stateAction = actions[action](item, user);
  state = reducer(state, stateAction);
  render(state);
});

// add ability to add users and items; local storage? other apis?
