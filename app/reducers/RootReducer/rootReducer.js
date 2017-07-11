import {combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import  movieReducer from '../MovieReducer/movieReducer'
export const history = createHistory();
export const middleware = routerMiddleware(history);



export const rootReducer = combineReducers({
  movieDetail: movieReducer,
  router: routerReducer,
});
