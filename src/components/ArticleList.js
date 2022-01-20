import { Card, CardContent, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../data/routes';

function ArticleList({arr}) {

    const [state, setState] = useState([])

    const params = useParams()

    useEffect(() => {
        console.log(params)
        routes.filter(route => {
            if (route.url === `/${arr}`) {
                setState(route.options)
            }
        })
    })
    

    return (
        <Main>
            {
                params.title?
                <Outlet/>
                :
                <Container>
                <h1>{arr}</h1>
                <ListContainer>
                    {
                        state.map(article => (
                            <Tile onClick={() => console.log(article.title)}>
                                <Link to={`/${arr}/${article.url}`}>
                                    <Card sx={{maxWidth: 300, minWidth: 300, minHeight: 300}}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={article.img}
                                        alt={article.alt}
                                        />  
                                    <CardContent >
                                        {article.title}
                                        <br />
                                        {article.subtitle}
                                        <br />
                                        <span> <b>By:</b>  {article.author} <br />
                                        <b>Posted:</b> {new Date(article.date).toDateString()} </span>
                                    </CardContent>
                                    </Card>
                                </Link>
                            </Tile>
                        ))
                    }
                </ListContainer>
            </Container>
            
            }   
        </Main>
    );
}

export default ArticleList;

const Main = styled.div`
    width: 100%;
    
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        text-align: center;
    }
`
const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`
const Tile = styled.div`
    margin: 2%;
    a {
        text-decoration: none;
    }
`