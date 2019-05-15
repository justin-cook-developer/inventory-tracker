const item = (key, count) => {
  return `
    <div class="item">
      <div class="item-header">
        <p class="item-title>${key}</p>
      </div>
      <div class="item-body">
        <p class="item-count">${count}</p>
      </div>
    </div>
  `;
};

export default item;
