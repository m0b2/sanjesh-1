
const InitialState = { current: 0 };
const QuestionReducer = (state = InitialState, action) => {

  switch (action.type) {
    case 'SET_QUESTIONS': return { ...state, ...action.payload };
    case 'SET_CURRENT_QUESTIONS': return { ...state, current: action.payload };
    case 'SET_CHANGE_ANSWER': {
      // const target = state[action.category_id]
      // const newState = target.map((value, index) =>
      //   index === action.current_question
      //     ? { ...value, answers: { ...value.answers, client_answer: action.client_answer,
      //       description:action.description } }
      //     : value
      // );

      const array = state[action.category_id].slice();
      array[action.question_id] = {...array[action.question_id],client_answer: {...action.client_answer}}
      return { ...state,
         [action.category_id]: array }
    }
    default: return state;
  }



};


export default QuestionReducer;