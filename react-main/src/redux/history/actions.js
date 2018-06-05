export const actions = {
  nextStep: 'NEXT_STEP',
  addStep: 'ADD_STEP'
};

export const handleNextStep = position => ({
  type: actions.nextStep,
  position
});

export const addStep = stepNumber => ({
  type: actions.addStep,
  stepNumber
});

const actionCreators = {
  handleNextStep: position => dispatch => dispatch(handleNextStep(position)),
  addStep: stepNumber => dispatch => dispatch(addStep(stepNumber))
};

export default actionCreators;
