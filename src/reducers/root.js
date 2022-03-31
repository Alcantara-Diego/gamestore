import { combineReducers } from 'redux'
import productsInfoReducer from './productsInfoReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    productsInfoReducer,
    cartReducer
});