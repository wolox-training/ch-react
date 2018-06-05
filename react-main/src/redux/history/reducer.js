const initialState = {
  stepNumber: 0
};

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      return {
        ...state,
        stepNumber: state.stepNumber + 1
      };
    case 'SET_STEP':
      return {
        ...state,
        stepNumber: action.stepNumber
      };
    default:
      return state;
  }
};
