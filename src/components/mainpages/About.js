import { motion } from "framer-motion";

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
        <p>Epsom is a market town in Surrey, England, known for its famous Epsom Downs Racecourse and the annual Epsom Derby. The town also has a rich history, with evidence of human settlement dating back to the Roman times. Today, Epsom is a thriving town with a bustling high street, beautiful parks and green spaces, and excellent transport links to London and other parts of the country.</p>
        <div className="empty-space-About"></div>
      </motion.div>
    );
  }

  export default About;