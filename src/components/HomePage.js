import {useEffect, useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import styled from "styled-components";
import "../style.css"
import {Link} from "react-router-dom";
import {currentPostAction} from "../redux/actions/currentPostAction";
import { setDataAction } from "../redux/actions/setDataAction";
import {useDispatch, useSelector} from "react-redux";


const StyledFeaturedImage = styled(Card.Img)`
  height: 20rem;
`

const StyledItemImage = styled(Card.Img)`
  height: 15rem;
  margin-bottom: 1rem;
  object-fit: cover;

`


export const HomePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [featuredPost, setFeatured] = useState({});
    const [maxLength] = useState(99);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const dispatch = useDispatch();
    const x = useSelector(state => state.setData)

    const myData = {
        title: "3434343",
        description: "new Description",
        date: "new Date",
        featured: false
    }

    useEffect(() => {
        setLoading(true);
        const getBlogs = async () => {
            const blogsFromServer = await fetchData()
            setData(blogsFromServer)
            setNumberOfItems(blogsFromServer.length)

            const featuredItem = blogsFromServer.find(item => item.featured === true);
            setFeatured(featuredItem)

            setLoading(false)
        }
        getBlogs()
    }, []);

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/posts')
        return await res.json();
    }


    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            {console.log(x)}
            <div className="container-fluid mt-4 ">
                <Row className="g-4 mb-4 mr-5 ml-5">
                    <Card className="bg-dark text-white" style={{width: "100%"}}>
                        <StyledFeaturedImage className="" src={featuredPost.url} alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title>{featuredPost.title}</Card.Title>
                            <Card.Text>
                                {featuredPost.description}
                            </Card.Text>
                            <Card.Text>Continue reading...</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Row>

            </div>

            <div className="container-fluid mt-4">
                <Row xs={1} md={2} className="g-4 mb-4 mr-5 ml-5">
                    {Array.from({length: numberOfItems}).map((_, idx) => (
                        <Col key={idx}>
                            <Card className="mb-4" id={idx}>
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
                                            <Link to="/detailedview">
                                                <Button variant="primary" onClick={()=> dispatch(currentPostAction(data[idx].id))}>Continue reading</Button>
                                            </Link>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Button onClick={()=> dispatch(currentPostAction(1))}>Set Featured</Button>
                <Button onClick={()=> dispatch(setDataAction(myData))}>Change State</Button>

            </div>


        </>

    )


}