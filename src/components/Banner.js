import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const messages = [
  'Thanks For Visiting',
  'Open to Contracting',
  'Open to Consulting',
  'Ready to be Hired',
];

function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % messages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <p>{messages[index]}</p> */}
      <p><strong>{messages[index]}</strong></p>
    </motion.div>
  );
}

export default Banner;
