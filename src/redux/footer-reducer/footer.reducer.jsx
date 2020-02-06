

const FooterReducer = (state = true, action) => {

    switch (action.type) {
        case 'REMOVE_FOOTER': return false
        case 'ADD_FOOTER': return true
        default: return state;
    }



};


export default FooterReducer;