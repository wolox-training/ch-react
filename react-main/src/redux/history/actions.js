export const actions = {
  addStep: 'ADD_STEP',
  setStep: 'SET_STEP'
};

export const addStep = () => ({
  type: actions.addStep
});

export const setStep = stepNumber => ({
  type: actions.setStep,
  stepNumber
});

const actionCreators = {
  addStep: () => dispatch => dispatch(addStep()),
  setStep: stepNumber => dispatch => dispatch(setStep(stepNumber))
};

export default actionCreators;
