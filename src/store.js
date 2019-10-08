import { createStore } from 'redux';

const initialState = {
  value: 0,
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.value };
    case 'START_ANIMATION':
      return { ...state, loading: true };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
