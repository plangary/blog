import firebase from "../firebase";
import {useEffect, useState} from "react";
import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

const StyledFeaturedImage = styled(Card.Img)`
  height: 20rem;
`

const StyledItemImage = styled(Card.Img)`
  height: 15rem;
  margin-bottom: 1rem;
  object-fit: cover;

`

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
`

export const HomePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [featuredPost, setFeatured] = useState([]);
    const [maxLength] = useState(99);
    const [numberOfItems, setNumberOfItems] = useState(0);

    const style = {
        card: {
            flexDirection: "row",
            alignItems: "center",

        }
    }

    const ref = firebase.firestore().collection("myblogs");


    const getData = () => {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setData(items);
            setLoading(false);
            setNumberOfItems(items.length)
        });
    }

    const createCol = (item)=>{
        return (
            <div>
                <Col>
                    <StyledItemImage variant="top" src={item.url}/>
                </Col>
                <Col>
                    <StyledCard className="mb-3 mt-3">
                        <Card.Body>
                            <Card.Title style={{flex: "1"}}>{item.title}</Card.Title>
                            <Card.Text style={{color: "grey"}}>{item.date}</Card.Text>
                            <Card.Text>
                                {item.description.substring(0, maxLength)}...
                            </Card.Text>
                            <Button variant="primary">Continue reading</Button>
                        </Card.Body>
                    </StyledCard>
                </Col>
            </div>


        )
    }
    const getFeatured = () => {
        data.filter(item => {
            if (item.featured === true) {
                setFeatured(item)
            }
        });
    }


    useEffect(() => {
        getData();
        getFeatured();
    }, []);


    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>


            <div className="container-fluid ">

                <Row className="g-4 mb-4 mr-5 ml-5">
                    <Card className="bg-dark text-white" style={{width: "100%"}}>
                        <StyledFeaturedImage className="" src={featuredPost.url} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Row>

            </div>

            <div className="container-fluid mt-4">
                <Row xs={1} md={2} className="g-4 mb-4 mr-5 ml-5">
                    {Array.from({length: numberOfItems}).map((_, idx) => (
                            <Col>
                                <Card className="mb-4">
                                    <Row>
                                        <Col>
                                            <StyledItemImage src={data[idx].url}/>
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Title style={{flex: "1"}}>{data[idx].title}</Card.Title>
                                                <Card.Text style={{color: "grey"}}>{data[idx].date}</Card.Text>
                                                <Card.Text>
                                                    {data[idx].description.substring(0, maxLength)}...
                                                </Card.Text>
                                                <Button variant="primary">Continue reading</Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                    ))}
                </Row>
            </div>




        </>

    )


}