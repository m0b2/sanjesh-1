

const AppbarReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADMIN_SET_CATEGORIES': return {
            ...state,
            ...action.payload
        }

        case 'ADMIN_SET_NOTIFICATIONS': {

            return {
                ...state,
                notifications: action.payload
            }
        }
        case 'ADMIN_SET_USERS': {

            return {
                ...state,
                users: action.payload
            }
        }


        case 'ADMIN_ADD_QUESTION': {

            return {
                ...state,
                questions: {
                    ...state.questions, [action.payload.id]: {
                        ...action.payload,
                        icon: 'fas fa-question',
                        category_id: action.payload.category.id
                    }
                }
            }
        }

        case 'ADMIN_ADD_CATEGORY': {
            const arr = (state.categories) ? state.categories.array : [];
            arr.push(action.payload)
            return {
                ...state,
                categories: { ...state.categories, [action.payload.id]: { ...action.payload }, array: arr }
            }
        }
        case 'ADMIN_ADD_NOTIFICATION': {

            return {
                ...state,
                notifications: { ...state.notifications, [action.payload.id]: { ...action.payload, icon: 'far fa-envelope' } }
            }
        }

        case 'ADMIN_SET_QUESTIONS': return {
            ...state,
            questions: action.payload
        }

        default: return state;
    }



};


export default AppbarReducer;