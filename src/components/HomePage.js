import firebase from "../firebase";
import {useEffect, useState} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

const StyledCardImage = styled(Card.Img)`
    height: 20rem;
`

const StyledItemImage = styled(Card.Img)`
  height: 15rem;
  margin-bottom: 1rem;
`

export const HomePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [featuredPost, setFeatured] = useState([]);
    const [maxLength] = useState(99);
    const [numberOfItems, setNumberOfItems] = useState(0);


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


            <div className="container-fluid">
                <Row className="mb-4 mr-5 ml-5">
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Featured</Card.Header>
                            <StyledCardImage variant="top" src={featuredPost.url} />
                            <Card.Body>
                                <Card.Title>{featuredPost.title}</Card.Title>
                                <Card.Text>

                                    {featuredPost.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="container-fluid">
                <Row xs={1} md={2} className="g-4 mb-4 mr-5 ml-5">
                    {Array.from({ length: numberOfItems }).map((_, idx) => (
                        <Col>
                            <Card className="mb-3 mt-3">
                                <Card.Body>
                                    <StyledItemImage variant="top" src={data[idx].url} />
                                    <Card.Title>{data[idx].title}</Card.Title>
                                    <Card.Text style={{color: "grey"}}>{data[idx].date}</Card.Text>
                                    <Card.Text >
                                        {data[idx].description.substring(0,maxLength)}...
                                    </Card.Text>
                                    <Button variant="primary">Continue reading</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>


        </>

    )


}