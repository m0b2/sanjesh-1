
const Initial_State = JSON.parse(localStorage.getItem('myBelovedCategories'));


const CategoriesReducer = (state = null, action) => {

    switch (action.type) {

        case 'SET_CATEGORIES': {

            localStorage.setItem('myBelovedCategories', JSON.stringify(action.payload));
            //  //console.log(...action.payload)
            return action.payload
        }
        case 'ANSWER_COUNT_UPDATE': {
            if (state[action.category_id].answeredCount >= action.currentQuestion + 1) {
                return state;
            }
            return { ...state, [action.category_id]: { ...state[action.category_id], answeredCount: action.currentQuestion + 1 } }


            
        }


        default: return state;
    }



};


export default CategoriesReducer;