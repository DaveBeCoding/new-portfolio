function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const letterVariants = {
    hidden: {
      x: "random(-200, 200)",
      y: "random(-200, 200)",
      rotate: "random(-360, 360)",
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
        delay: "random(0, 0.5)",
      },
    },
  };

  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h4 variants={letterVariants}>C</motion.h4>
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
      <motion.h4 variants={letterVariants}>{year}</motion.h4>
    </motion.footer>
  );
}