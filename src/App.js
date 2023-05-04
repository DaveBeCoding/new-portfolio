// // import './App.css';
// // import React from 'react';
// // import Footer from './components/HeaderandFooter/Footer';
// // import Home from './components/mainpages/Home';
// // import About from './components/mainpages/About';
// // import TradingView from './components/TickerTape';
// // import { Route, Link, Switch, Redirect } from 'react-router-dom';
// // import NotFound from './components/mainpages/NotFound';
// // import BlogEndpoint from './components/mainpages/BlogEndpoint';

// // function App() {
// //   return (
// //     <div className="app">
// //       <TradingView />
// //       <header>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/blog">Blog</Link>
// //             </li>
// //             <li>
// //               <Link to="/about">About</Link>
// //             </li>
// //           </ul>
// //         </nav>
// //       </header>
// //       <div className="content-wrapper">
// //         <Switch>
// //           <Route exact path="/" component={Home} />
// //           <Route path="/blog" component={BlogEndpoint} />
// //           <Route path="/about" component={About} />
// //           <Route path="*" render={() => <Redirect to="/" />} />
// //         </Switch>
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;







import './App.css';
import React from 'react';
import Footer from './components/HeaderandFooter/Footer';
import Home from './components/mainpages/Home';
import About from './components/mainpages/About';
import TradingView from './components/TickerTape';
import { Route, Link, Routes } from 'react-router-dom';
import NotFound from './components/mainpages/NotFound';
import BlogEndpoint from './components/mainpages/BlogEndpoint';

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
            <Route path="/portfolio" element={<Home />} />
            <Route path="https://davebecoding.github.io/" element={<Home />} />
            <Route path="/blog" element={<BlogEndpoint />} />
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


// import './App.css';
// import React from 'react';
// import Footer from './components/HeaderandFooter/Footer';
// import Home from './components/mainpages/Home';
// import About from './components/mainpages/About';
// import TradingView from './components/TickerTape';
// import { Route, Link, Routes, useNavigate } from 'react-router-dom';
// import NotFound from './components/mainpages/NotFound';
// import BlogEndpoint from './components/mainpages/BlogEndpoint';

// function RedirectHome() {
//   const navigate = useNavigate();
  
//   // When the component mounts, immediately redirect to the home page
//   React.useEffect(() => {
//     navigate('/');
//   }, [navigate]);
  
//   return null;
// }

// function App() {
//   return (
//     <div className="app">
//       <TradingView />
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <div className="content-wrapper">
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/blog" element={<BlogEndpoint />} />
//             <Route path="/about" element={<About />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <Route path="/404" element={<RedirectHome />} />
//         </main>
//         <Footer/>
//       </div>
//     </div>
//   );
// }

// export default App;
