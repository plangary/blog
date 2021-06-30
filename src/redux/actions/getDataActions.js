


export const fetchDataAction = (data) =>{
    return {
        type: 'GET_DATA',
        data
    }
}
/*export const fetchData = (data) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) =>{
        const firestore = getFirestore();

        firestore.collection('myBlogs').add({
            ...data,
            date: 'todays date',
            title: 'sending from app',
            description: 'sample description',
            featured: false,
            id: '4',
            url: 'www.google.com'
        }).then(()=>{
            dispatch({type: 'GET_DATA', data});
        }).catch((err)=>{
            dispatch({type: 'ERROR', err});
        })

    }

}*/
