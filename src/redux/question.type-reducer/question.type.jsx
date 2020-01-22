const Question_Type_Reducer = (state = 0, action) => {

    switch (action.type) {
        case 'SET_QUESTION_TYPE': return action.payload
        default: return state;
    }



};


export default Question_Type_Reducer;