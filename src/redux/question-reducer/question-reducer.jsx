
const InitialState = { current: 0 };
const QuestionReducer = (state = InitialState, action) => {

  switch (action.type) {
    case 'SET_QUESTIONS': return { ...state, ...action.payload };
    case 'SET_CURRENT_QUESTIONS': return { ...state, current: action.payload };
    case 'SET_CHANGE_ANSWER': {
      const target = state[action.category_id]
      const newState = target.map((value, index) =>
        index === action.current_question
          ? { ...value, answers: { ...value.answers, answer: action.answers,
            description:action.description } }
          : value
      );
      return { ...state, [action.category_id]: [...newState] }
    }
    default: return state;
  }



};


export default QuestionReducer;