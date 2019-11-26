import { combineReducers } from 'redux'
import user from './userReducer'
import foods from './foodReducer'

export default combineReducers({
    user: user, 
    foods: foods
})
