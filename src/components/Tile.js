import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Tile({article, arr}) {
    return (
        <Main onClick={() => console.log(article.title)}>
            <Link to={`/${arr}/${article.url}`}>
                <Card sx={{width: 300, height: 300}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={article.img}
                    alt={article.alt}
                    />  
                <Content >
                    <TitleContainer>
                        <h3>
                            {article.title}
                        </h3>
                        <h4 style={{color: "#6E7172"}}>
                            <i>
                                {article.subtitle} 
                            </i> 
                        </h4>
                    </TitleContainer>
                    <AuthorContainer>
                        
                        <b>Posted:</b> {new Date(article.date).toDateString()}
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
    box-shadow: 5px 5px 10px #000033;
    :hover {
        box-shadow: 10px 10px 20px #000033;
        
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