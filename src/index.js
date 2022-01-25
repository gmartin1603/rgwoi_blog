import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Home from './components/Home';
import Article from './components/Article';
import stateReducer, { initState } from './context/stateReducer';
import { StateProvider } from './context/stateProvider';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initState} reducer={stateReducer} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="popular" element={<ArticleList arr="popular" label="Popular"/>} >
              <Route path=":title" element={<Article arr="/popular"/>} />
            </Route>
            <Route path="latest" element={<ArticleList arr="latest" label="Latest"/>} >
              <Route path=":title" element={<Article arr="/latest"/>} />
            </Route>
            <Route path="repair" element={<ArticleList arr="repair" label="Repair"/>} >
              <Route path=":title" element={<Article arr="/repair"/>} />
            </Route>
            <Route path="fab" element={<ArticleList arr="fab" label="Fabrication"/>} >
              <Route path=":title" element={<Article arr="/fab"/>} />
            </Route>
            <Route path="reviews" element={<ArticleList arr="reviews" label="Reviews"/>} >
              <Route path=":title" element={<Article arr="/reviews"/>} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <Home/>
                </main>
              }
              />
          </Route>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
