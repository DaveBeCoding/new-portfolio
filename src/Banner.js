import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';

const messages = [
  'Welcome to our website!',
  'Check out our latest products',
  'Join our loyalty program',
  'Free shipping on all orders',
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
      <p>{messages[index]}</p>
    </motion.div>
  );
}

export default Banner;
