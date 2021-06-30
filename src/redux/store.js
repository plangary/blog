import thunk from 'redux-thunk';
import firebase from '../firebase'
import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import 'firebase/firestore'
import { rootReducer } from './reducers/rootReducer'
import { useFirestore } from 'react-redux-firebase'



firebase.firestore().settings({ timestampsInSnapshots: true })

const store = createStore(rootReducer);


export default store;