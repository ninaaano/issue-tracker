export const FILTER_ACTION_TYPES = {
  CLICK_MENU: 'CLICK_MENU',
  RESET_FILTER: 'RESET_FILTER',
};

const initState = {
  isOpened: true, // 열린 이슈, 닫힌 이슈, 필터드롭다운에도 적용해야함.
  commentedByMe: false,
  milestone: null,
  label: null,
  assignee: null,
  writer: null,
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.CLICK_MENU: {
      const { filterType, id } = action.payload;
      const value = state[filterType] !== id || state[filterType] === null ? id : null;

      return { ...state, [filterType]: value };
    }

    case FILTER_ACTION_TYPES.RESET_FILTER: {
      return { ...initState };
    }

    default:
      return state;
  }
};
