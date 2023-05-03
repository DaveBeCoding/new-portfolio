
import { useState } from "react";
import post  from './data-objects/data.json';

function BlogPost({ post }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2>{post.date}</h2>
      <h3>{post.summary}</h3>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide" : "Read more"}
      </button>
      {expanded && (
        <div>
          {post.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return <p key={index}>{item.value}</p>;
              case "image":
                return <img key={index} src={item.src} alt={item.alt} />;
              case "video":
                return (
                  <div key={index}>
                    <video src={item.src} controls />
                    <p>{item.caption}</p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default BlogPost;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import blogData from './data-objects/b-data.json';

// function Blogger() {
//   return (
//     <div>
//       {blogData.blogs.map(blog => (
//         <div key={blog.id}>
//           <Link to={blog.link}>
//             <img src={blog.image} alt={blog.title} />
//             <h2>{blog.title}</h2>
//             <p>{blog.description}</p>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Blogger;




// import React, { useState } from "react";

// function BlogBox({ title, content, onDelete }) {
//   return (
//     <div className="blog-box">
//       <h3>{title}</h3>
//       <p>{content}</p>
//       <button onClick={onDelete}>Delete</button>
//     </div>
//   );
// }

// function Blogger() {
//   const [blogPosts, setBlogPosts] = useState([
//     {
//       id: 1,
//       title: "My First Blog Post",
//       content: "This is my first blog post.",
//     },
//     {
//       id: 2,
//       title: "My Second Blog Post",
//       content: "This is my second blog post.",
//     },
//   ]);

//   const handleDelete = (id) => {
//     setBlogPosts(blogPosts.filter((post) => post.id !== id));
//   };

//   const handleAdd = () => {
//     const newId = blogPosts.length + 1;
//     const newPost = {
//       id: newId,
//       title: `Blog Post ${newId}`,
//       content: `This is blog post number ${newId}.`,
//     };
//     setBlogPosts([...blogPosts, newPost]);
//   };

//   return (
//     <div className="blog-container">
//       <h2>My Blog</h2>
//       <button onClick={handleAdd}>Add Blog Post</button>
//       {blogPosts.map((post) => (
//         <BlogBox
//           key={post.id}
//           title={post.title}
//           content={post.content}
//           onDelete={() => handleDelete(post.id)}
//         />
//       ))}
//     </div>
//   );
// }

// export default Blogger;
