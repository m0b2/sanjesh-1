

const isNeededReducer = (state = {appbar:true}, action) => {

    switch (action.type) {
        case 'SET_ISNEEDED': return {...state,...action.payload}
        
        default: return state;
    }



};


export default isNeededReducer;