import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import techs from './techsReducer';

const rootReducer = combineReducers({techs, routing: routerReducer});

export default rootReducer;
