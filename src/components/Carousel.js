import React, { useState } from 'react';
import styled from 'styled-components';

function Carousel({arr, alt}) {
    const [index, setIndex] = useState(0)

    const next = () => {
        let i = index + 1;
        if (i === arr.length) {
            setIndex(0)
        } else {
            setIndex(i)
        }
    }

    const prev = () => {
        let i = index - 1;
        let last = arr.length - 1;
        
        if (i >= 0) {
            setIndex(i)
        } else {
            setIndex(last)
        }
    }

    return (
        <Wrapper>
            <Container>
                    <img src={arr[index]} alt={alt} />
            </Container>
                    <ButtonContainer>
                        <button onClick={() => prev()}>Prev</button>
                        <button onClick={() => next()}>Next</button>
                    </ButtonContainer>
        </Wrapper>
    );
}


export default Carousel;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100%;
        max-height: 500px;
    }
`
const ButtonContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    button {

    }
`