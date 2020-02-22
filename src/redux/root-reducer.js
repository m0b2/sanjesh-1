import { combineReducers } from 'redux';
import UserReducer from './user-reducer/user-reducer';
import Question_Type from './question.type-reducer/question.type';
import Questions from './question-reducer/question-reducer';
import SideTab from './tab-reducer/tab-reducer';
import FooterReducer from './footer-reducer/footer.reducer';
import CityReducer from './city-reducer/city-reducer';
import EditPageAppbar from './appbar-reducer/appbar-reducer';
import Categories from './categories-reducer/categories-reducer';
import loading from './loading-reducer/loading-reducer';
import Notification from './notification-reducer/notification-reducer';
import OldAnswer from './old-answer-reducer/old-answer-reducer';
import globalFunction from './global-function/global-function';
import userAnswer from './userAnswer-reducer/userAnswer-reducer'
import isNeededReducer from './isNeeded/isNeeded-reducer';
import AdminReducer from './admin-reducer/admin-reducer';
export default combineReducers({
    user: UserReducer,
    question_type: Question_Type,
    question: Questions,
    SideTab,
    FooterReducer,
    CityReducer,
    isEditPage:EditPageAppbar,
    Categories,
    loading,
    Notification,
    oldAnswer:OldAnswer,
    globalFunction,
    userAnswer,
    isNeededReducer,
    admin:AdminReducer

})