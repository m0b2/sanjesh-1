
const InitialState = {
    category_id: null,
    question_id: null,
    answer_id: null,
    des: null
}

const CategoriesReducer = (state = InitialState, action) => {

    switch (action.type) {

        case 'SET_USER_FINAL_ANSWER': {


            return { ...state, ...action.payload }
        }

        default: return state;
    }



};


export default CategoriesReducer;