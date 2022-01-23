import { Avatar, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { articles } from '../data/articles';

function Article({title, subtitle, bio, avatar, img, date, author, imgAlt, body}) {

    const [state, setState] = useState({})
    let params = useParams()

    let objs = [
        {
            format: 'sbs',
            overview: "OverView",
            tools: ['wrench', 'impact'],
            steps: {0: "Drain and cover coolant in a clean container for reuse.", 1: "Remove upper radiator hose"},
            keyPoints: ["Mating surfaces should be clean and smooth", "sdfhsjkhf sdjhfk"]
        },
        {
            format: 'review',
            overview: "OverView",
            name: 'Master Pro thing',
            body: "This is the main portion of the article",
            pros: ["Mating surfaces should be clean and smooth", "sdfhsjkhf sdjhfk"],
            cons: ["uuuuum", "yes"],
        },
        {
            format: 'writeUp',
            overview: "OverView",
            body: "This is the main portion of the article",
            tools: ['wrench', 'impact'],
            keyPoints: ["Mating surfaces should be clean and smooth", "sdfhsjkhf sdjhfk"]
        },
    ]

    const buildBody = () => {
        console.log(state.format)
        switch (state.format) {
            case 'sbs':
                return (
                    <BodyContainer>
                        <p>
                            {state.overview}
                        </p>
                        <h4>Tools Needed:</h4>
                        <ul>
                            {
                                state.tools.map(tool => (
                                    <li key={tool} > {tool} </li>
                                ))
                            }
                        </ul>
                        <h4>Repair Procedure</h4>
                        <ol>
                            {
                                state.steps &&
                                state.steps.map((step, i) => (
                                    <li key={i} >
                                        {
                                            step.title
                                        }
                                        <br />
                                        {
                                            step.body
                                        }
                                    </li>
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

                    </BodyContainer> 
                )
            case 'review':
                return (
                    <BodyContainer>

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
        articles && articles.filter(article => {
            if (article.hasOwnProperty('url') && article.url === params.title) {
                setState(article)
            }
        })
        
    })

    return (
        <Main>
            <Paper>
            <ArticleHead>
                <Container>
                    <h1>{state.title}</h1>
                    <h4><i> {state.subtitle} </i></h4>
                    <AvatarContainer>
                        <Avatar src={state.avatar} alt={state.author} />
                        <div id="Author-Box">
                            <h3> {state.author} </h3>
                            <h5> {state.bio} </h5>
                            <h6>Published: {new Date(state.date).toDateString()} </h6>
                        </div>
                    </AvatarContainer>
                </Container>
                <img src={state.img} alt={state.imgAlt} />
            </ArticleHead>
            {
                buildBody()
            }
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
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
    p {
        padding-top: 5%;
        padding-left: 7%;
        padding-right: 7%;
        padding-bottom: 5%;
        font-size: 110%;
    }
    p::first-letter {
        font-size: 180%;
        font-weight: 600;
        font-style: italic    
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    padding-left: 5%;
    h4 {
        padding-left: 2%;
        color: #808080;
    }
`
const ArticleHead = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 2.5%;
    img {
        max-width: 40%;
        
    }
    @media (max-width: 600px) {
        flex-direction: column;
        img {
            max-width: 90%;
        }
    }
`
const AvatarContainer = styled.div`
    display: flex;
    padding: 2%;
    align-items: center;
    #Author-Box {
        padding-left: 5%;
        padding-top: 5%; 
    }
`
const BodyContainer = styled.div`

`