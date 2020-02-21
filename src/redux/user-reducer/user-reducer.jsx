
const Initial_State = JSON.parse(localStorage.getItem('myBelovedUser'));


const UserReducer = (state = Initial_State, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER': return {
            ...state,
            ...action.payload
        }
        case 'USER_LOGGED_IN': {

            localStorage.setItem('myBelovedUser', JSON.stringify({
                ...state,
                ...action.payload,
                isLoggedIn: true
            }));
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
        default: return state;
    }



};


export default UserReducer;