
import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';


// function Home() {
  

//   return <h1>Home</h1>;
// }

// function Home() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: -100 },
//     visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
//   };

//   return (
//     <motion.div
//       className="container"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.h1 variants={itemVariants}>Home</motion.h1>
//     </motion.div>
//   );
// }


// function Home() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const hVariants = {
//     hidden: { x: -100 },
//     visible: { x: 0, transition: { delay: 0.2 } },
//   };

//   const oVariants = {
//     hidden: { y: -100 },
//     visible: { y: 0, transition: { delay: 0.4 } },
//   };

//   const mVariants = {
//     hidden: { y: 100 },
//     visible: { y: 0, transition: { delay: 0.6 } },
//   };

//   const eVariants = {
//     hidden: { x: 100 },
//     visible: { x: 0, transition: { delay: 0.8 } },
//   };

//   return (
//     <motion.div
//       className="container"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.h1 variants={hVariants}>H</motion.h1>
//       <motion.h1 variants={oVariants}>o</motion.h1>
//       <motion.h1 variants={mVariants}>m</motion.h1>
//       <motion.h1 variants={eVariants}>e</motion.h1>
//     </motion.div>
//   );
// }


// function Home() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const hVariants = {
//     hidden: { x: -200 },
//     visible: { x: 0, transition: { delay: 0.2 } },
//   };

//   const oVariants = {
//     hidden: { y: -200 },
//     visible: { y: 0, transition: { delay: 0.4 } },
//   };

//   const mVariants = {
//     hidden: { y: 200 },
//     visible: { y: 0, transition: { delay: 0.6 } },
//   };

//   const eVariants = {
//     hidden: { x: 200 },
//     visible: { x: 0, transition: { delay: 0.8 } },
//   };

//   return (
//     <motion.div
//       className="container"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.h1 variants={hVariants}>H</motion.h1>
//       <motion.h1 variants={oVariants}>o</motion.h1>
//       <motion.h1 variants={mVariants}>m</motion.h1>
//       <motion.h1 variants={eVariants}>e</motion.h1>
//     </motion.div>
//   );
// }

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const hVariants = {
    hidden: { x: -200 },
    visible: { x: 0, transition: { delay: 0.2 } },
  };

  const oVariants = {
    hidden: { y: -200 },
    visible: { y: 0, transition: { delay: 0.4 } },
  };

  const mVariants = {
    hidden: { y: 200 },
    visible: { y: 0, transition: { delay: 0.6 } },
  };

  const eVariants = {
    hidden: { x: 200 },
    visible: { x: 0, transition: { delay: 0.8 } },
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={hVariants} style={{ display: "inline-block", marginRight: "10px" }}>H</motion.h1>
      <motion.h1 variants={oVariants} style={{ display: "inline-block", marginRight: "10px" }}>o</motion.h1>
      <motion.h1 variants={mVariants} style={{ display: "inline-block", marginRight: "10px" }}>m</motion.h1>
      <motion.h1 variants={eVariants} style={{ display: "inline-block", marginRight: "10px" }}>e</motion.h1>
    </motion.div>
  );
}



function Blog() {
  return <h1>Blog</h1>;
}

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

function App() {
  return (
    <div>
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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

