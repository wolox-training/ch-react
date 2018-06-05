const initialState = {
  squares: Array(9).fill(null),
  stepNumber: 0
};

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        squares: Object.assign([...state.squares], { [action.position]: 'X' })
      };
    case 'ADD_STEP':
      return {
        ...state,
        stepNumber: this.state.stepNumber + 1
      };
    default:
      return state;
  }
};
