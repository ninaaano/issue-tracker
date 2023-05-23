export const FILTER_ACTION_TYPES = {
  CLICK_MENU: 'CLICK_MENU',
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.CLICK_MENU: {
      const { filterType, id } = action.payload;
      const newFilter = { ...state[filterType] };

      Object.keys(newFilter).forEach((key) => {
        newFilter[key] = false;
      });

      newFilter[id] = !state[filterType][id];
      const newState = { ...state, [filterType]: newFilter };

      return newState;
    }

    default:
      return state;
  }
};
