import { CardContent, Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../context/stateProvider';
import { routes } from '../data/routes';
import Tile from './Tile';

function Home(props) {

    const [state, dispatch] = useStateValue()

    return (
        <Main>
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
                sx={{padding: '3%', bgcolor:"rgb(9, 0, 12, .8)"}}
            >
                <ListContainer>
                    {
                        state.routes.length > 0 &&
                        state.routes.map(route => (
                            <Tile
                                obj={route}
                                arr={route.url}
                                key={route.url}
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
padding-top: 0;
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