


const GlobalFunc = (state = ()=>{}, action) => {

    switch (action.type) {

        case 'SET_GLOBAL_FUNCTION': return action.payload;

        default: return state;
    }



};


export default GlobalFunc;