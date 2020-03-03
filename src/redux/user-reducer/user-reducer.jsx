
const Initial_State = { ...JSON.parse(localStorage.getItem('myBelovedUser')), first_time: false, error: false };



const UserReducer = (state = Initial_State, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER': {

            localStorage.setItem('myBeLovedToken', JSON.stringify((action.payload.token)));
            localStorage.setItem('myBelovedUser', JSON.stringify({
                ...state,
                ...action.payload
            }));
            return {
                ...state,
                ...action.payload
            }
        }
        case 'ERORR': return {
            ...state, error: true, erorr_message: action.payload
        }
        case 'USER_LOGGED_IN': {

            localStorage.setItem('myBelovedUser', JSON.stringify({
                ...state,
                ...action.payload,
                isLoggedIn: true,

            }));
            localStorage.setItem('myBeLovedToken', JSON.stringify((action.payload.token)));
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true
            }
        }
        case 'USER_LOGGED_OUT' || 'NOT_AUTHORISED': {
            localStorage.clear();
            return null;
        }
        case '401_ERORR': {
            localStorage.clear();
            return null;
        }
        case 'USER_FIRST_TIME': {

            return { ...state, first_time: true };
        }
        case 'USER_END_FIRST_TIME': {

            return { ...state, first_time: false };
        }
        default: return state;
    }



};


export default UserReducer;