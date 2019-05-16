const decrement = (item, user) => ({ type: 'decrement', item, user });
const increment = (item, user) => ({ type: 'increment', item, user });

const actions = {
  decrement,
  increment,
};

export default actions;
