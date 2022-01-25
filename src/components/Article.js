import { Avatar, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { articles } from '../data/articles';
import ListItem from './ListItem';
import Carousel from './Carousel';

function Article({key}) {

    const [state, setState] = useState({})
    let params = useParams()

    

    const buildBody = () => {
        console.log(state.format)
        switch (state.format) {
            case 'sbs':
                return (
                    <BodyContainer className="sbs" >
                        <p>
                            {state.overview}
                        </p>
                        <h3>Tools Needed:</h3>
                        <ul>
                            {
                                state.tools.map(tool => (
                                    <li key={tool} > {tool} </li>
                                ))
                            }
                        </ul>
                        <h3>Repair Procedure</h3>
                        <ol>
                            {
                                state.steps &&
                                state.steps.map((step, i) => (
                                    <ListItem 
                                    key={i}
                                    obj={step}
                                    />
                                ))
                            }
                        </ol>
                        <h4>Key Take Aways</h4>
                        <ul>
                            {
                                state.keyPoints &&
                                state.keyPoints.map((item, i) => (
                                    <li key={i} > {item} </li>
                                ))
                            }
                        </ul>
                    </BodyContainer> 
                )
            case 'writeUp':
                return (
                    <BodyContainer>
                        {state.body}
                    </BodyContainer> 
                )
            case 'review':
                return (
                    <BodyContainer>
                        <p>
                            {state.overview}
                        </p>
                        <h3>Pros</h3>
                        <ul>
                            {
                                state.pros &&
                                state.pros.map((pro, i) => (
                                    <ListItem 
                                    key={i}
                                    obj={pro}
                                    />
                                ))
                            }
                        </ul>
                        <h3>Cons</h3>
                        <ul>
                            {
                                state.cons &&
                                state.cons.map((con, i) => (
                                    <ListItem 
                                    key={i}
                                    obj={con}
                                    />
                                ))
                            }
                        </ul>
                        <h3>In Conclusion</h3>
                        <p>
                            {state.conclusion}
                        </p>
                        {
                            state.link ?
                            <a href={state.link}>
                                    Buy on Amazon
                                </a>
                            : ''
                        }
                    </BodyContainer> 
                )
            default:
                return (
                    <BodyContainer>
                        <p>
                            No Body object
                        </p>
                    </BodyContainer>
                )
        }
    }

    useEffect(() => {
        console.log( "load")
        
        articles && articles.filter((article) => {
            if (article.hasOwnProperty('url') && article.url === params.title) {
                setState(article)
            }
        })
        
    }, [])

    return (
        <Main>
            <Paper >
            <ArticleHead>
                <Container>
                    <h1>{state.title}</h1>
                    <h4><i> {state.subtitle} </i></h4>
                    <h6>Posted: {new Date(state.date).toDateString()} </h6>
                </Container>
                {
                    state.imgs ?
                    state.imgs.length > 1 ?
                    <Carousel
                        arr= {state.imgs}
                        alt={state.title}
                    />
                    :
                    state.imgs.map((img, i) => (
                        <img key={i} src={img} alt={state.title} />
                    ))
                    : ''
                }
                {
                    state.link ?
                        <a href={state.link}>
                            Buy on Amazon
                        </a>
                    : ''
                }
            </ArticleHead>
            {
                buildBody()
            }
            <AvatarContainer>
                <Avatar src={state.avatar} alt={state.author} />
                <div id="Author-Box">
                    <h3> {state.author} </h3>
                    <h5> {state.bio} </h5>
                </div>
            </AvatarContainer>
        </Paper>
        </Main>
    );
}

export default Article;

const Main = styled.div`
    font-family: 'IBM Plex Serif', serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    p {
        padding-top: 5%;
        padding-bottom: 5%;
        font-size: 110%;
    }
    
`
const Container = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
        color: #808080;
    }
`
const ArticleHead = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 2.5%;
    a {
        width: 100%;
        text-align: center;
        padding-top: 5%;
    }
    img {
        width: 60%;
        padding: 5%;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        img {
            width: 90%;
        }
    }
`
const AvatarContainer = styled.div`
    display: flex;
    padding: 2%;
    align-items: center;
    justify-content: center;
    #Author-Box {
        padding: 5%; 
    }
`
const BodyContainer = styled.div`
    padding: 5%;
    .sbs {
        p::first-letter {
            font-size: 180%;
            font-weight: 600;
            font-style: italic    
        }
    }
`