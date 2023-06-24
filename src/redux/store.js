import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import categoriesReducer from './categoriesRedux';
import selectedCategoryReducer from './selectedCategoryRedux';

const subreducers = {
  posts: postsReducer,
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
