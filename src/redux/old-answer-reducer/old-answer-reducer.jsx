

const OldAnswer = (state = [], action) => {

    switch (action.type) {
        case 'SET_USER_OLD_ANSWER': return action.payload
        
        case 'SET_USER_NEW_ANSWER': return {
            ...state,
            ...action.payload
        }
        default: return state;
    }



};


export default OldAnswer;