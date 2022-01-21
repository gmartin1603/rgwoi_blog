
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../data/routes';
import Tile from './Tile';

function ArticleList({arr, label}) {

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
                    <h1>{label}</h1>
                    <ListContainer>
                        {
                            state.map(article => (
                                <Tile
                                    article={article}
                                    arr={arr}
                                />
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
    font-family: 'IBM Plex Serif', serif;
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
    justify-content: center;
`
