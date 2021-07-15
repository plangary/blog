import firebase from "../../firebase";

const initialState = [{t: "jjjjj"}];
const ref = firebase.firestore().collection("myblogs");


const fetchDataReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'GET_DATA':
            ref.onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    state.push(doc.data());
                    //data.push(doc.data());
                    //console.log(doc.data())
                });
            });
            console.log("called!");
            return state;

        case 'ERROR' :
            console.log('get data error', action.err);
            return state;

        default:
            return state;
    }
}

export default fetchDataReducer;