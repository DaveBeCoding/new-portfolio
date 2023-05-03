import React from 'react';

function Post({ title, author, content, image, video }) {
//   return (
//     <div className="post">
//       <h2 className="post-title">{title}</h2>
//       <p className="post-author">By {author}</p>
//       <p className="post-content">{content}</p>
//     </div>
//   );

return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-author">By {author}</p>
      <img className="post-image" src={image} alt={title} />
      <p className="post-content">{content}</p>
      <div className="post-video">
        <video width="560" height="315" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Post;
