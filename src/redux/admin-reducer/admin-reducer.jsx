

const AppbarReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADMIN_SET_CATEGORIES': return {
            ...state,
            ...action.payload
        }
        case 'ADMIN_ADD_CATEGORY': {
            const arr = state.categories.array;
            arr.push(action.payload)
            return {
                ...state,
                categories: { ...state.categories, [action.payload.id]: { ...action.payload }, array: arr }
            }
        }
        case 'ADMIN_SET_QUESTIONS': return {
            ...state,
            questions:action.payload
        }

        default: return state;
    }


    
};


export default AppbarReducer;