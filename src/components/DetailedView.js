import {useSelector, useDispatch} from "react-redux";
import {Button, Card, Col, Row} from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react";

const StyledFeaturedImage = styled(Card.Img)`
  height: 20rem;
`
const StyledFeaturedTitle = styled(Card.Title)`
    font-size: 3rem;
`

const StyledCard = styled(Card)`
  width: 100%;
  margin-top: 1rem;
`
export const DetailedView = () => {

    const [currentPost, setCurrentPost] = useState({});


    const isLogged = useSelector(state => state.isLogged);
    const currentPostId = useSelector(state => state.currentPost)
    const dispatch = useDispatch();
    const posts = useSelector(state => state.fetchPosts);
    const maxCharacterCount = 99;


    useEffect(()=>{
        const featuredPost = posts.find((post) => post.id === currentPostId )
        setCurrentPost(featuredPost)
        console.log(featuredPost)
    })


    return (
        <>
             <div className="container-fluid mt-4 ">
                <Row className="g-4 mb-4 mr-5 ml-5">
                    <Card className="bg-dark text-white" style={{width: "100%"}}>
                        <StyledFeaturedImage className="" src={currentPost.url} alt="Card image"/>
                        <Card.ImgOverlay>
                            <StyledFeaturedTitle >{currentPost.title}</StyledFeaturedTitle>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </div>
            <div className="container-fluid mt-4 ">
                <Row className="g-4 mb-4 mr-5 ml-5">
                    <Col sm={{span: 7, offset : 0}}>
                        <Row>
                            <h2>{currentPost.title}</h2>
                        </Row>
                        <Row>
                            <h3>{currentPost.date}</h3>
                        </Row>
                        <Row>
                            {currentPost.description}
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <h2>Other Posts</h2>
                        </Row>
                        <Row>
                            {posts.map(item => <StyledCard border="secondary" >
                                <StyledCard.Header>Header</StyledCard.Header>
                                <StyledCard.Body>
                                    <StyledCard.Title>{item.title}</StyledCard.Title>
                                    <StyledCard.Text>
                                        {item.description}
                                    </StyledCard.Text>
                                </StyledCard.Body>
                            </StyledCard>)}
                        </Row>

                    </Col>
                </Row>
            </div>
            <br/>
            <br/>

        </>
    )


}



