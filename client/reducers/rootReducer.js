import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import techs from './techs';

const rootReducer = combineReducers({techs, routing: routerReducer});

export default rootReducer;
