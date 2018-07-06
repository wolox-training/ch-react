import * as LocalStorageService from '../../services/LocalStorageService';

export const actions = {
  addStep: 'ADD_STEP',
  setStep: 'SET_STEP',
  saveGame: 'SAVE_GAME',
  getGames: 'GET_GAMES'
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

const actionCreators = {
  addStep: () => dispatch => dispatch(addStep()),
  setStep: stepNumber => dispatch => dispatch(setStep(stepNumber)),
  saveGame: board => dispatch => {
    const currentHistory = LocalStorageService.getHistory() || [];
    currentHistory.push(board[0]);
    const historyString = JSON.stringify(currentHistory);
    LocalStorageService.saveHistory(historyString);
    return dispatch(saveGame());
  },
  getGame: () => dispatch => {
    const games = LocalStorageService.getHistory();
    return dispatch(getGames(JSON.parse(games)));
  }
};

export default actionCreators;
