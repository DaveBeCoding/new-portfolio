import React from 'react';
import Post from './Post';
import image1 from '../../assets/test_1.png';
import image2 from '../../assets/test_2.png';
import video1 from '../../assets/testmp4.mp4';
import video2 from '../../assets/testvid_2.mp4'

const post = [
  {
    title: 'Linear Regression Project',
    author: 'Dave',
    content: 'This is the content of the first post,This is the content of the first post' 
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. '
  +'This is the content of the first post.This is the content of the first post. ',
    image: image1,
    video: video1,
  },
  {
    title: 'Hybrid Encryption',
    author: 'Dave',
    content: 'This is the content of the first post,This is the content of the first post' 
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. ',
    image: image2,
    video: video2,
  },
  {
    title: 'Drone Devlopment',
    author: 'Dave',
    content: 'This is the content of the first post,This is the content of the first post' 
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. '
    +'This is the content of the first post.This is the content of the first post. ',
    image: image1,
    video: video1,
  },
  // Add more posts...
];

function Blog() {
  return (
    <div className="blog">
      {post.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default Blog;