
import './App.css';
import React from 'react';
import Footer from './components/HeaderandFooter/Footer';
import Home from './components/mainpages/Home';
import About from './components/mainpages/About';
import TradingView from './components/TickerTape';
import { Route, Link, Routes } from 'react-router-dom';
import NotFound from './components/mainpages/NotFound';
import Blog_endpoint from './components/mainpages/Blog_endpoint';

function App() {
  return (
    <div className="app">
      <TradingView />
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content-wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog_endpoint />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;