import {combineReducers} from 'redux';
import UserReducer from './user-reducer/user-reducer';


export default combineReducers({
    user:UserReducer
})