

const LoadingReducer = (state = null, action) => {

    switch (action.type) {

        case 'SET_NOTIFICATION': return { ...state, ...action.payload };



        default: return state;
    }



};


export default LoadingReducer;