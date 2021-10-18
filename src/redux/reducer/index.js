import { combineReducers } from 'redux';
import { setDataReducer, setSelectedDataReducer } from './reducer';

export const reducer = combineReducers({
    products : setDataReducer,
    product : setSelectedDataReducer,

})