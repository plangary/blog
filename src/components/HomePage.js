import firebase from "../firebase";
import {useEffect, useState} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

const StyledCardImage = styled(Card.Img)`
    height: 500px;
`

export const HomePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [featuredPost, setFeatured] = useState([]);
    const [maxLength, setMaxLength] = useState(99);


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
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <div className="container-fluid">
                    <Row className="mb-4 mr-5 ml-5">
                        <Col sm={{span: 5, offset: 0}}>
                            {data.map((post) => {
                                return (
                                    <Row>
                                        <Col>

                                        </Col>

                                        <Card className="mb-3" style={{width: '90rem'}} key={post.id}>
                                            <Card.Body>
                                                <Card.Title>{post.title}</Card.Title>
                                                <Card.Text>
                                                    {post.description.substring(0,maxLength)} ...
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                )
                            })}
                        </Col>
                    </Row>
                </div>

            </div>

        </>

    )


}