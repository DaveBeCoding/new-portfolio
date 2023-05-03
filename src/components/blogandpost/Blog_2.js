import React from 'react';
import Post from './Post';
import image1 from '../../assets/testimg.png';
import video1 from '../../assets/testmp4.mp4';

const post = [
  {
    title: 'First Post',
    author: 'John Doe',
    content: 'This is the content of the first post.',
    image: image1,
    video: video1,
  },
  {
    title: 'Second Post',
    author: 'Jane Doe',
    content: 'This is the content of the second post.',
  },
  // Add more posts...
];

function Blog_2() {
  return (
    <div className="blog">
      <h1>My Blog</h1>
      {post.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default Blog_2;
