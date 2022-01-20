import { Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

function Home(props) {
    return (
        <Main>
            <h1>Home</h1>
            <Paper
                sx={{margin: '5%'}}
            >
                <p>
                    Welcome to Right Guy Workin On It! 
                    Thank you for stopping and I sincerly
                    hope you find what youre looking for!
                    
                </p>
                <p>
                    Select a category from the nav bar 
                    or app menu to view a list of articles to read
                </p>
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
    padding: 5% 10%;
}
`