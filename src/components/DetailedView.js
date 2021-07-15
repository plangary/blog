import {useSelector, useDispatch} from "react-redux";
import {Button, Card, Carousel, Col, Container, Image, Row} from "react-bootstrap";
import {isLoaded, useFirestoreConnect} from "react-redux-firebase";
import styled from "styled-components";
import {changeStatus} from "../redux/actions/loggedStatusAction";
import {currentPostAction} from "../redux/actions/currentPostAction"
import {useEffect, useState} from "react";

const StyledFeaturedImage = styled(Card.Img)`
  height: 20rem;
`
const StyledFeaturedTitle = styled(Card.Title)`
    font-size: 3rem;
`
export const DetailedView = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [data, setData] = useState([]);

    const isLogged = useSelector(state => state.isLogged);
    const currentPost = useSelector(state => state.currentPost)
    const dispatch = useDispatch();
    const mydata = useSelector((state => state.firestore.ordered.myblogs));

    const setCurrentPost = ()=>{
        mydata.find(item => {
            if (item.id === "1"){
                setTitle(item.title);
                setDescription(item.description);
                setDate(item.date);
            }
        })

    }

    useFirestoreConnect([
        {collection: 'myblogs'}
    ]);


    useEffect(()=>{
    })




    if (!isLoaded(mydata)) {
        return <div>Loading....</div>
    }
    return (
        <>
            {console.log(currentPost)}
            {console.log(isLogged)}
            <div className="container-fluid mt-4 ">
                <Row className="g-4 mb-4 mr-5 ml-5">
                    <Card className="bg-dark text-white" style={{width: "100%"}}>
                        <StyledFeaturedImage className="" src="https://static.vecteezy.com/system/resources/previews/000/677/302/non_2x/abstract-technology-banner-background.jpg" alt="Card image"/>
                        <Card.ImgOverlay>
                            <StyledFeaturedTitle >{mydata[0].title}</StyledFeaturedTitle>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </div>
            <div className="container-fluid mt-4 ">
                <Row className="g-4 mb-4 mr-5 ml-5">
                    <Col sm={{span: 7, offset : 0}}>
                        <Row>
                            <h2>{title}</h2>
                        </Row>
                        <Row>
                            <h3>{mydata[0].date}</h3>
                        </Row>
                        <Row>
                            {mydata[0].description}
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <h2>Other Posts</h2>
                        </Row>
                        <Row>
                            <Card border="secondary" >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Secondary Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="secondary" >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Secondary Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </div>
            <br/>
            <br/>
            <Button onClick={()=> dispatch(changeStatus())}>Press</Button>
            {console.log(mydata.find(x =>{
                return x.id === "4"
            }))}


        </>
    )


}



