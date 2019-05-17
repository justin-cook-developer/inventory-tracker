const item = (itemName, count) => `
  <div class="item flex-item">
    <div class="item-header">
      <p class="item-title">${itemName}</p>
    </div>
    <div class="item-body">
      <p class="item-count">${count}</p>
    </div>
  </div>
`;

export default item;
