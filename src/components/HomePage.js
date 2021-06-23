import firebase from "../firebase";
import {useEffect, useState} from "react";


export const HomePage = ()=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [featuredName, setFeatured] = useState("");

    const ref = firebase.firestore().collection("myblogs");


    const getData = ()=> {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setData(items);
            setLoading(false);
        });
    }

    const getFeatured = () =>{
        data.forEach((item) =>{
            console.log(item)
        })

    }
    useEffect(() => {
        getData();
        getFeatured();
    }, []);


    if (loading){
        return <h1>Loading...</h1>
    }
    return (

        <>
            <h2>
                {data.map((post) =>(
                    <h3>
                        {post.title}
                    </h3>
                    )
                )}
            </h2>
        </>


    )


}