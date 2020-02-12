

const AppbarReducer = (state = false, action) => {

    switch (action.type) {
        case 'EDIT_PAGE_DONE': return false
        case 'EDIT_PAGE': return true
        default: return state;
    }



};


export default AppbarReducer;