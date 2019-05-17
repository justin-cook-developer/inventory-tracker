const user = (name, items, stock) => `
  <div class="user flex-item">
    <div class="user-header">
      <p class="user-name">${name}</p>
    </div>
    <div class="users-items">
      ${Object.entries(items)
        .map(
          ([item, count]) => `
          <div class="user-item" data-item="${item}" data-user="${name}">
            <button data-action="decrement" ${
              count <= 0 ? 'disabled' : ''
            }>-</button>
            <span class="user-item-content">${item}: ${count}</span>
            <button data-action="increment" ${
              stock[item] <= 0 ? 'disabled' : ''
            }>+</button>
          </div>
        `
        )
        .join('')}
    </div>
  </div>
`;

export default user;
