import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [  { src: 'https://picsum.photos/400/300?random=1', link: 'https://www.google.com' },  { src: 'https://picsum.photos/400/300?random=2', link: 'https://www.facebook.com' },  { src: 'https://picsum.photos/400/300?random=3', link: 'https://www.twitter.com' },  { src: 'https://picsum.photos/400/300?random=4', link: 'https://www.instagram.com' },];
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <motion.img
        src={images[activeIndex].src}
        alt="slide"
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => handleImageClick(images[activeIndex].link)}
      />
      <motion.button
        onClick={handlePrevClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff',
          cursor: 'pointer',
          outline: 'none',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {'<'}
      </motion.button>
      <motion.button
        onClick={handleNextClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff',
          cursor: 'pointer',
          outline: 'none',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {'>'}
      </motion.button>
    </div>
  );
};

export default Slider;