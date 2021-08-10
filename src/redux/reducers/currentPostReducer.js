

const initId = 0;


const currentPostReducer = (state = initId, action) =>{
    switch (action.type){
        case "SET_CURRENT_POST":
            return action.id;
        default:
            return state;
    }
}

export default currentPostReducer;