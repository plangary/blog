
const initialState = {
    title: "My Title",
    description: "My Description",
    date: "My Date",
    featured: false
}

const setDataReducer = (state = initialState, action) => {
    if (action.type === 'SET_DATA'){
        return {
            ...state,
            title: action.data.title,
            description: action.data.description,
            date: action.data.date,
            featured: action.data.featured
        }
    }
    return state;
}

export default setDataReducer