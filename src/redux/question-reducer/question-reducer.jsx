
const InitialState = { 'current': 0 };
const QuestionReducer = (state = InitialState, action) => {

  switch (action.type) {
    case 'SET_QUESTIONS': return { ...state, ...action.payload };
    case 'SET_CURRENT_QUESTIONS': return { ...state, current: action.payload };
    default: return state;
  }



};


export default QuestionReducer;