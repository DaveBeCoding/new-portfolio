
import React from 'react';
import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <h3>Welcome my portfolio site</h3>
    </motion.div>
  
  );
}

function Blog() {
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
      <motion.h1 variants={hVariants} style={{ display: "inline-block", marginRight: "10px" }}>B</motion.h1>
      <motion.h1 variants={oVariants} style={{ display: "inline-block", marginRight: "10px" }}>l</motion.h1>
      <motion.h1 variants={mVariants} style={{ display: "inline-block", marginRight: "10px" }}>o</motion.h1>
      <motion.h1 variants={eVariants} style={{ display: "inline-block", marginRight: "10px" }}>g</motion.h1>
    </motion.div>
  );
}

function About() {
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
      <motion.h1 variants={hVariants} style={{ display: "inline-block", marginRight: "10px" }}>A</motion.h1>
      <motion.h1 variants={oVariants} style={{ display: "inline-block", marginRight: "10px" }}>b</motion.h1>
      <motion.h1 variants={mVariants} style={{ display: "inline-block", marginRight: "10px" }}>o</motion.h1>
      <motion.h1 variants={eVariants} style={{ display: "inline-block", marginRight: "10px" }}>u</motion.h1>
      <motion.h1 variants={eVariants} style={{ display: "inline-block", marginRight: "10px" }}>t</motion.h1>
    </motion.div>
  );
}

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cVariants = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { delay: 0.2 } },
  };

  const pVariants = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { delay: 0.4 } },
  };

  const rVariants = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { delay: 0.6 } },
  };

  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>C</motion.h1>
      <motion.h1 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>o</motion.h1>
      <motion.h1 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>p</motion.h1>
      <motion.h1 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>y</motion.h1>
      <motion.h1 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>r</motion.h1>
      <motion.h1 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>i</motion.h1>
      <motion.h1 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>g</motion.h1>
      <motion.h1 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>h</motion.h1>
      <motion.h1 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>t</motion.h1>
      <motion.h1 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>{" "}</motion.h1>
      <motion.h1 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>©</motion.h1>
      <motion.h1 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>{" "}</motion.h1>
      <motion.h1 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>{year}</motion.h1>
    </motion.footer>
  );
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
      <Footer/>
    </div>
  );
}

export default App;