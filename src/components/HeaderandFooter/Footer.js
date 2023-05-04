import { motion } from "framer-motion";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: {
        repeat: Infinity,
        repeatDelay: 1.5,
        duration: 0.3,
      },
    },
  };

  const yearVariant = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 1080,
      transition: {
        duration: 2,
        delay: 1,
        repeat: Infinity,
        repeatDelay: 1.5,
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
      {['c', 'o', 'p', 'y', 'r', 'i', 'g', 'h', 't'].map((letter, index) => (
        <motion.h4
          key={index}
          variants={itemVariants}
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          {letter}
        </motion.h4>
      ))}
      <motion.h4
        variants={yearVariant}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        ©
      </motion.h4>
      <motion.h4
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        {" "}
      </motion.h4>
      <motion.h4
        variants={yearVariant}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        {year}
      </motion.h4>
    </motion.footer>
  );
}

export default Footer;
