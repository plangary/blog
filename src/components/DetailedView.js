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


    const isLogged = useSelector(state => state.isLogged);
    const currentPostId = useSelector(state => state.currentPost)
    const dispatch = useDispatch();
    const data = useSelector((state => state.firestore.ordered.myblogs));




    const x = useSelector(
        ({ firestore: { data } }) => data.myblogs && data.myblogs[18]
    )


    useEffect(()=>{

    })


    if (!isLoaded(data)) {
        return <div>Loading....</div>
    }
    return (
        <>
            <div className="container-fluid mt-4 ">
                <Row className="g-4 mb-4 mr-5 ml-5">
                    <Card className="bg-dark text-white" style={{width: "100%"}}>
                        <StyledFeaturedImage className="" src="https://static.vecteezy.com/system/resources/previews/000/677/302/non_2x/abstract-technology-banner-background.jpg" alt="Card image"/>
                        <Card.ImgOverlay>
                            <StyledFeaturedTitle >{data[0].title}</StyledFeaturedTitle>
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
                            <h3>{data[0].date}</h3>
                        </Row>
                        <Row>
                            {data[0].description}
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

        </>
    )


}



