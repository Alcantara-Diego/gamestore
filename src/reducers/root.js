import { combineReducers } from 'redux'
import productsInfoReducer from './productsInfoReducer'
import cartReducer from './cartReducer'
import animationReducer from './animationReducer';

export default combineReducers({
    productsInfoReducer,
    cartReducer,
    animationReducer
});