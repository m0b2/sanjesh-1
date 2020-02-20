
const Initial_State = JSON.parse(localStorage.getItem('myBelovedCategories'));


const CategoriesReducer = (state = null, action) => {

    switch (action.type) {

        case 'SET_CATEGORIES': {

            localStorage.setItem('myBelovedCategories', JSON.stringify(action.payload));
            // console.log(...action.payload)
            return action.payload
        }

        default: return state;
    }



};


export default CategoriesReducer;