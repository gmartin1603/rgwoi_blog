import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Home from './components/Home';
import Article from './components/Article';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="popular" element={<ArticleList arr="popular" />} >
            <Route path=":title" element={<Article arr="/popular"/>} />
          </Route>
          <Route path="latest" element={<ArticleList arr="latest" />} >
            <Route path=":title" element={<Article arr="/latest"/>} />
          </Route>
          <Route path="repair" element={<ArticleList arr="repair" />} >
            <Route path=":title" element={<Article arr="/repair"/>} />
          </Route>
          <Route path="fab" element={<ArticleList arr="fab" />} >
            <Route path=":title" element={<Article arr="/fab"/>} />
          </Route>
          <Route path="tools" element={<ArticleList arr="tools" />} >
            <Route path=":title" element={<Article arr="/tools"/>} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
