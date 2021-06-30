import firebase from "../../firebase";



let data = [];

const ref = firebase.firestore().collection("myblogs");


const fetchDataReducer = (state = data, action) =>{
    switch (action.type){
        case 'GET_DATA':
            ref.onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    data.push(doc.data());
                    console.log(data.length)
                });
            });

            return state;

        case 'ERROR' :
            console.log('get data error', action.err);
            return state;

        default:
            return state;
    }
}

export default fetchDataReducer;