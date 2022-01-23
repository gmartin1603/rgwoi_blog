import { CardContent, Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { routes } from '../data/routes';
import Tile from './Tile';

function Home(props) {
    return (
        <Main>
            <h1>Home</h1>
            <CardContent
                sx={{backgroundColor: 'rgb(33, 47, 60, 0.5)', margin: '2%', borderStyle:'outset', textAlign: 'center'}}
            >
            <p>
                Welcome to Right Guy Workin On It! 
                Thank you for stopping and I sincerly
                hope you find what you're looking for!
                
            </p>
            <p>
                Select a category from the nav  
                or a tile below to browse 
                that categories list of articles 
                to read
            </p>
        
      </CardContent>
            <Paper
                sx={{padding: '3%'}}
            >
                <ListContainer>
                    {
                        routes && 
                        routes.map(route => (
                            <Tile
                                article={route}
                                arr={route.url}
                            />
                        ))
                    }
                </ListContainer>
            </Paper>
        </Main>
    );
}

export default Home;

const Main = styled.div`
height 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 5%;
p {
    padding: 2% 2%;
    color: #B3B6B7;
    font-size: 100%;
    font-weight: 600;
}
`
const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`