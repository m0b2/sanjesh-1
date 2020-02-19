const Initial_State = {
    id: '',
    type: '',
    username: '',
    full_name: '',
    email: null,
    email_verified_at: null,
    role: null,
    "created_at": "",
    "updated_at": "",
    isLoggedIn:false

};


const UserReducer = (state = Initial_State, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER': return {
            ...state,
            ...action.payload
        }
        case 'USER_LOGGED_IN': return {
            ...state,
            ...action.payload,
            isLoggedIn:true
        }
        case 'USER_LOGGED_OUT': return Initial_State;
        default: return state;
    }



};


export default UserReducer;