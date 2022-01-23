import { Link, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Home from "./components/Home";



function App() {

 

  

  return (
    <Main>
      <Header/>
      <Container>
        <Outlet/>
        {/* {
          articles.map(article => (
            <div>
            
            <Link to={`/${article.title}`} > {article.title} <br /> {article.subtitle} </Link>
            <Article
            title={article.title}
            subtitle={article.subtitle}
            author={article.author}
            bio={article.bio}
            img={article.img}
            date={article.date}
            />    
            </div>
            ))
          } */}
        
        {/* <Products/> */}
        {/* <Article/> */}
      </Container>
      
    </Main>
  )
}

export default App;

const Main = styled.div`
background-color: #00A36C;
width: 100%;
min-height 100vh;

`
const Container = styled.div`
font-family: 'IBM Plex Serif', serif;
`