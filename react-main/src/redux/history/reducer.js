const initialState = {
  stepNumber: 0,
  xIsNext: true
};

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      return {
        ...state,
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext
      };
    case 'SET_STEP':
      return {
        ...state,
        stepNumber: action.stepNumber,
        xIsNext: action.stepNumber % 2 === 0
      };
    case 'SAVE_GAME':
      return {
        ...state
      };
    case 'GET_GAMES':
      return {
        ...state,
        history: action.payload.history
      };
    default:
      return state;
  }
};
