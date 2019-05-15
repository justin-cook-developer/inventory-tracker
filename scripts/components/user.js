const user = (name, items) => `
  <div class="user">
    <div class="user-header">
      <p class="user-name">${name}</p>
    </div>
    <div class="users-items">
      ${Object.entries(items).map(
        ([item, count]) => `

      `
      )}
    </div>
  </div>
`;
