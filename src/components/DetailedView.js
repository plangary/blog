import {useSelector, useDispatch} from "react-redux";
import { Card, Col, Row} from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {currentPostAction} from "../redux/actions/currentPostAction";
import {CardActions, CardContent, Container, CssBaseline, Grid, makeStyles, Typography} from "@material-ui/core";
import { featuredPost } from "./subcomponents/featuredPost";
import {Button} from "@material-ui/core";
import {Header} from "./subcomponents/Header";
import { connect } from 'react-redux'


const StyledFeaturedImage = styled(Card.Img)`
  height: 20rem;
`
const StyledFeaturedTitle = styled(Card.Title)`
    font-size: 3rem;
`

const StyledCard = styled(Card)`
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    background-color: rgba(0,0,0,0.08);
  }
`



const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const HorizontalLine = styled.hr`
  background-color: black;
  height: 1px
`

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const DetailedView = (props) => {

    const [currentPost, setCurrentPost] = useState({});


    const isLogged = useSelector(state => state.isLogged);
    const currentPostId = useSelector(state => state.currentPost)
    const dispatch = useDispatch();
    const posts = useSelector(state => state.fetchPosts);
    const maxCharacterCount = 99;


    useEffect(()=>{
        const featuredPost = posts.find((post) => post.id === currentPostId )
        setCurrentPost(featuredPost)
    })




    return (
        <>
            {console.log(props.id)}
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
                <HorizontalLine/>
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
                            {posts.map(item => <StyledCard style={{cursor: 'pointer'}} onClick={()=>dispatch(currentPostAction(2))} border="secondary" >
                                <StyledCard.Header>Header</StyledCard.Header>
                                <StyledCard.Body>
                                    <StyledCard.Title>{item.title}</StyledCard.Title>
                                    <StyledCard.Text>
                                        {item.description.substring(0, maxCharacterCount)}
                                    </StyledCard.Text>
                                    <StyledCard.Text style={{color: 'blue'}}>
                                        Continue Reading...
                                    </StyledCard.Text>
                                </StyledCard.Body>
                            </StyledCard>)}
                        </Row>

                    </Col>
                </Row>
            </div>
        </>
    )


}


const mapStateToProps = state => ({
        id: state.currentPost
    })

export default connect(mapStateToProps)(DetailedView);