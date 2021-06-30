import {useSelector, useDispatch} from "react-redux";
import {Button} from "react-bootstrap";
import {changeStatus} from "../redux/actions/loggedStatusReducer";
import { fetchDataAction } from '../redux/actions/getDataActions'
import {useEffect, useState} from "react";


export const DetailedView = ()=>{
    const isLogged = useSelector(state => state.isLogged1);
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("test");
    const [description, setDescription] = useState("test");
    const [date, setDate] = useState("todats date");
    const [featured, setFeatured] = useState(false);
    const [id, setId] = useState("5");

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
    })

    return (
        <>


            <input type="text" onChange={e =>(setTitle(e.target.value))}/>
            <br/>
            <br/>
            <strong>{title}</strong>
            <br/>
            <br/><br/>
            <br/><br/>
            <br/>

            <br/>
            <br/><br/>
            <br/><br/>
            <br/>
            <Button onClick={()=> dispatch(changeStatus())}>Change state</Button>

        </>
    )

}