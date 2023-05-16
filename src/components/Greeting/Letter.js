// import About from './components/mainpages/About';
import { Link } from 'react-router-dom';
import React from 'react';
import './Letter.css';
// import About from '../mainpages/About';

const Letter = () => {
    return (
        <div className="letter">
            <pre className='letter'>{"Welcome to my portfolio site!\n"}</pre>
            <p> I'm Dave, a passionate and dedicated software engineer who's constantly exploring the exciting world of code. I believe that knowledge is a never-ending journey, and I'm always keen to learn more.</p>

            <p>In this site, you'll find a collection of my work, ranging from Python and C++ projects to machine learning explorations and algorithm challenges. I have a keen interest in artificial intelligence and data science, and I enjoy solving complex problems through code.</p>

            <p>Feel free to browse through my <a href="https://github.com/DaveBeCoding" title="GitHub repository" target="_blank" rel="noopener noreferrer">GitHub repository</a>
                {" "}
                where you'll see examples of my work, including Machine Learning with Python, Neural Network from Scratch, and various Algorithm Challenges. These projects show my ability to write clean, efficient code and my understanding of complex algorithms and data structures.</p>

            <p>I hope you enjoy exploring my work as much as I've enjoyed creating it. If you have any questions or would like to discuss potential collaborations or opportunities, <Link to="/about">please don't hesitate to get in touch</Link>
                . I'm always open to new ideas and challenges.</p>
            <p>Thank you for visiting!</p>
        </div>
    );
}

export default Letter;
