

const loggedReducer = (state = false, action) => {
    switch (action.type){
        case 'SIGN_IN':
            console.log("Changed Status!")
            return !state;
        default:
            return state;
    }

};

export default loggedReducer;
