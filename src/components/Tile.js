import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Tile({obj, arr}) {

    const buildURL = () => {
        console.log('run')
        let url = ``
        if (obj.label) {
            url = obj.url
        } else {
            url = `/${arr}/${obj.url}`
        }
        return url
    }

    return (
        <Main onClick={() => console.log(obj.title)}>
            <Link to={buildURL()}>
                <Card sx={{width: 300, height: 300}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={obj.img}
                    alt={obj.alt}
                    />
                <Content >
                    <TitleContainer>
                        <h3>
                            {obj.label ? obj.label : obj.title}
                        </h3>
                        <h4 style={{color: "#6E7172"}}>
                            <i>
                                {obj.subtitle}
                            </i>
                        </h4>
                    </TitleContainer>
                    <AuthorContainer>

                        <b>{obj.label ? "Last Post" : "Posted"}:</b> {new Date(obj.date).toDateString()}
                    </AuthorContainer>
                </Content>
                </Card>
            </Link>
        </Main>
    );
}

export default Tile;

const Main = styled.div`
    margin: 2%;
    max-width: 300px;
    botder: 1px solid "rgb(9, 0, 12, .8)";
    box-shadow: 5px 5px 10px "rgb(9, 0, 12, .8)";
    transition: all .2s ease-in-out;
    :hover {
        box-shadow: 5px 10px 10px #00A36C;
        scale: 1.1;
    }
    a {
        text-decoration: none;
    }
`
const Content = styled.div`
    padding: 5%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 500;
`
const TitleContainer = styled.div`
    display: flex;
    flex: .7;
    flex-direction: column;
    justify-content: space-around;

`
const AuthorContainer = styled.div`

`