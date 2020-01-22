const Initial_State = {
    currentPage: 'home'

};


const PageReducer = (state = Initial_State, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER': return {
            ...state,
            currentUser: action.payload
        }
        default: return state;
    }



};


export default PageReducer;