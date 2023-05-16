import { motion } from "framer-motion";
import Slider from "../Slider";
import Banner from "../Banner";
import Letter from "../Greeting/Letter";

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
        {/* <h3>Welcome to my portfolio site</h3> */}
        <Banner />
        <Slider />
        <Letter/>
        {/* <p>Welcome to my portfolio site! I'm Dave, a passionate and dedicated software engineer who's constantly exploring the exciting world of code. I believe that knowledge is a never-ending journey, and I'm always keen to learn more.

In this site, you'll find a collection of my work, ranging from Python and C++ projects to machine learning explorations and algorithm challenges. I have a keen interest in artificial intelligence and data science, and I enjoy solving complex problems through code.

Feel free to browse through my GitHub repository where you'll see examples of my work, including Machine Learning with Python, Neural Network from Scratch, and various Algorithm Challenges. These projects show my ability to write clean, efficient code and my understanding of complex algorithms and data structures.

I hope you enjoy exploring my work as much as I've enjoyed creating it. If you have any questions or would like to discuss potential collaborations or opportunities, please don't hesitate to get in touch. I'm always open to new ideas and challenges.

Thank you for visiting! </p> */}
        {/* <br/>
        <br/>
        <br/>
        <br/> */}
        <div className="empty-space"></div>
      </motion.div>
  
    );
  }

  export default Home;