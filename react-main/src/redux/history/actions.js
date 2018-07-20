import * as HistoryService from '../../services/HistoryService';

export const actions = {
  addStep: 'ADD_STEP',
  setStep: 'SET_STEP',
  saveGame: 'SAVE_GAME',
  getGames: 'GET_GAMES',
  resetGame: 'RESET_GAME',
  errorGame: 'ERROR_GAME'
};

export const addStep = () => ({
  type: actions.addStep
});

export const setStep = stepNumber => ({
  type: actions.setStep,
  stepNumber
});

export const saveGame = () => ({
  type: actions.saveGame
});

export const getGames = games => ({
  type: actions.getGames,
  payload: {
    history: games
  }
});

export const errorGame = () => ({
  type: actions.errorGame
});

export const resetGame = () => ({
  type: actions.resetGame
});

const actionCreators = {
  addStep: () => dispatch => dispatch(addStep()),
  setStep: stepNumber => dispatch => dispatch(setStep(stepNumber)),
  saveGame: board => async dispatch => {
    const currentHistory = await HistoryService.getHistory();
    HistoryService.saveHistory([...currentHistory.data[0].game, ...board]);
    return dispatch(saveGame());
  },
  getGame: () => async dispatch => {
    const response = await HistoryService.getHistory();
    if (response.ok) {
      const currentHistory = response.data;
      return dispatch(getGames(currentHistory[0].game));
    }
    return dispatch(errorGame());
  },
  resetGame: () => dispatch => dispatch(resetGame())
};

export default actionCreators;
