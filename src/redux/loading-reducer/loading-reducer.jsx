
const Initial_State = {
    categories: false,
    categories_review: false,
    notification: false,
    profile: false
}


const LoadingReducer = (state = Initial_State, action) => {

    switch (action.type) {

        case 'SET_LOADING': return { ...state, ...action.payload };



        default: return state;
    }



};


export default LoadingReducer;