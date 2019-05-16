const cloneArray = arr =>
  arr.map(el => {
    if (Array.isArray(el)) {
      return cloneArray(el);
    } else if (typeof el === 'object') {
      return cloneObject(el);
    } else {
      return el;
    }
  });

const cloneObject = obj => {
  const newObj = { ...obj };

  for (let key in newObj) {
    if (newObj.hasOwnProperty(key)) {
      const value = newObj[key];

      if (Array.isArray(value)) {
        newObj[key] = cloneArray(value);
      } else if (typeof value === 'object') {
        newObj[key] = cloneObject(value);
      }
    }
  }

  return newObj;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement': {
      const { item, user } = action;
      const newState = cloneObject(state);
      newState.customers[user][item]--;
      newState.prizes[item]++;
      return newState;
    }
    case 'increment': {
      const { item, user } = action;
      const newState = cloneObject(state);
      newState.customers[user][item]++;
      newState.prizes[item]--;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
