import { Avatar, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { articles } from '../data/articles';

function Article({title, subtitle, bio, avatar, img, date, author, imgAlt, body}) {

    const [state, setState] = useState({})
    let params = useParams()

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
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos sit enim porro dolores sapiente ipsa, earum eligendi expedita fugit eveniet perferendis qui ullam odio ex nisi, ut accusamus ipsam.
            </p>
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