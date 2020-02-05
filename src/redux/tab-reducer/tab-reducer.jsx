



const Tab_Reducer = (state = { title: [], current: 0, isVisible: false }, action) => {

    switch (action.type) {
        case 'SET_TAB_VALUE': return { ...state, title: action.payload }
        case 'SET_CURRENT_TAB': return { ...state, current: action.payload }
        case 'ADD_SIDE_LIST': return { ...state, isVisible: true, current: 0 }
        case 'REMOVE_SIDE_LIST': return { ...state, isVisible: false, current: 0 }
        default: return state;
    }



};


export default Tab_Reducer;