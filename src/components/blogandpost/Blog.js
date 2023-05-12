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
    content: 'A 256-bit size is represented as 2^256.This number represents the total number of possible keys that could be used in AES-256 encryption. This is a very large number, specifically:'
    +'115,792,089,237,316,195,423,570,985,008,687,907,853,269,984,665,640,564,039,457,584,007,913,129,639,936'
    +'The large number of possible keys makes AES-256 very secure against brute-force attacks, as the time required to test all possible keys is beyond current computational capabilities.',
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