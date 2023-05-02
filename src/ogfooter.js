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
  
        <motion.h4 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>C</motion.h4>
        <motion.h4 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>o</motion.h4>
        <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>p</motion.h4>
        <motion.h4 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>y</motion.h4>
        <motion.h4 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>r</motion.h4>
        <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>i</motion.h4>
        <motion.h4 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>g</motion.h4>
        <motion.h4 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>h</motion.h4>
        <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>t</motion.h4>
        <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>{" "}</motion.h4>
        <motion.h4 variants={cVariants} style={{ display: "inline-block", marginRight: "10px" }}>©</motion.h4>
        <motion.h4 variants={rVariants} style={{ display: "inline-block", marginRight: "10px" }}>{" "}</motion.h4>
        <motion.h4 variants={pVariants} style={{ display: "inline-block", marginRight: "10px" }}>{year}</motion.h4>
      </motion.footer>
    );
  }