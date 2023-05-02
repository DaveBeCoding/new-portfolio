
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

// START FOOTER **


function Footer() {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

  // const cVariants = {
  //   hidden: { y: 100 },
  //   visible: { y: 0, transition: { delay: 0.2 } },
  // };

  // const pVariants = {
  //   hidden: { y: 100 },
  //   visible: { y: 0, transition: { delay: 0.4 } },
  // };

  // const rVariants = {
  //   hidden: { y: 100 },
  //   visible: { y: 0, transition: { delay: 0.6 } },
  // };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  const cVariants = {
    hidden: { rotate: -180 },
    visible: { rotate: 0, transition: { delay: 0.2 } },
  };

  // const copyVariants = {
  //   hidden: { rotate: -90 },
  //   visible: { rotate: 1080, transition: { delay: 1 } },
  // };

  const copyVariants = {
    hidden: { rotate: -90 },
    visible: { rotate: -1080, transition: { duration: 2, delay: 1 } },
  };

  const yearVariant = {
    hidden: { rotate: -180 },
    visible: { rotate: 1080, transition: { duration: 2, delay: 1 } },
  };
  
  const pVariants = {
    hidden: { rotate: 360 },
    visible: { rotate: 0, transition: { delay: 0.4 } },
  };
  
  const rVariants = {
    hidden: { rotate: -180 },
    visible: { rotate: 0, transition: { delay: 0.6 } },
  };
  

  // const letterVariants = {
  //   hidden: {
  //     x: "random(-200, 200)",
  //     y: "random(-200, 200)",
  //     rotate: "random(-360, 360)",
  //     opacity: 10,
  //   },
  //   visible: {
  //     x: 0,
  //     y: 0,
  //     rotate: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 30,
  //       damping: 10,
  //       delay: "random(0, 0.5)",
  //     },
  //   },
  // };

  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <motion.h4 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>c</motion.h4>
      <motion.h4 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>o</motion.h4>
      <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>p</motion.h4>
      <motion.h4 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>y</motion.h4>
      <motion.h4 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>r</motion.h4>
      <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>i</motion.h4>
      <motion.h4 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>g</motion.h4>
      <motion.h4 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>h</motion.h4>
      <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>t</motion.h4>
      <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>{" "}</motion.h4>
      <motion.h4 variants={copyVariants} style={{ display: "inline-block", marginRight: "10px" }}>©</motion.h4>
      <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>{" "}</motion.h4>
      <motion.h4 variants={yearVariant} style={{ display: "inline-block", marginRight: "10px" }}>{year}</motion.h4>
      {/* <motion.h4 variants={letterVariants}>C</motion.h4>
      <motion.h4 variants={letterVariants}>o</motion.h4>
      <motion.h4 variants={letterVariants}>p</motion.h4>
      <motion.h4 variants={letterVariants}>y</motion.h4>
      <motion.h4 variants={letterVariants}>r</motion.h4>
      <motion.h4 variants={letterVariants}>i</motion.h4>
      <motion.h4 variants={letterVariants}>g</motion.h4>
      <motion.h4 variants={letterVariants}>h</motion.h4>
      <motion.h4 variants={letterVariants}>t</motion.h4>
      <motion.h4>{" "}</motion.h4>
      <motion.h4 variants={letterVariants}>©</motion.h4>
      <motion.h4>{" "}</motion.h4>
      <motion.h4 variants={letterVariants}>{year}</motion.h4> */}

    </motion.footer>
  );
}

//TEST FOOTER 


// function Footer() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const letterVariants = {
//     hidden: {
//       x: "random(-200, 200)",
//       y: "random(-200, 200)",
//       rotate: "random(-360, 360)",
//       opacity: 0,
//     },
//     visible: {
//       x: 0,
//       y: 0,
//       rotate: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 30,
//         damping: 10,
//         delay: "random(0, 0.5)",
//       },
//     },
//   };

//   const year = new Date().getFullYear();

//   return (
//     <motion.footer
//       className="footer"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.h4 variants={letterVariants}>C</motion.h4>
//       <motion.h4 variants={letterVariants}>o</motion.h4>
//       <motion.h4 variants={letterVariants}>p</motion.h4>
//       <motion.h4 variants={letterVariants}>y</motion.h4>
//       <motion.h4 variants={letterVariants}>r</motion.h4>
//       <motion.h4 variants={letterVariants}>i</motion.h4>
//       <motion.h4 variants={letterVariants}>g</motion.h4>
//       <motion.h4 variants={letterVariants}>h</motion.h4>
//       <motion.h4 variants={letterVariants}>t</motion.h4>
//       <motion.h4>{" "}</motion.h4>
//       <motion.h4 variants={letterVariants}>©</motion.h4>
//       <motion.h4>{" "}</motion.h4>
//       <motion.h4 variants={letterVariants}>{year}</motion.h4>
//     </motion.footer>
//   );
// }

// END FOOTER **
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
      <Footer />
    </div>
  );
}

export default App;