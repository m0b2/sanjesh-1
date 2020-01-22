import {combineReducers} from 'redux';
import UserReducer from './user-reducer/user-reducer';
import Question_Type from './question.type-reducer/question.type';


export default combineReducers({
    user:UserReducer,
    question_type:Question_Type
})