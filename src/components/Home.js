import React from 'react';
import styled from 'styled-components';

function Home(props) {
    return (
        <Main>
            <h1>Home</h1>
            <p>
                Welcome to Right Guy Workin On It! 
                Thank you for stopping and I sincerly
                 hope you find what youre looking for!
                  
            </p>
        </Main>
    );
}

export default Home;

const Main = styled.div`
height 100%;
`