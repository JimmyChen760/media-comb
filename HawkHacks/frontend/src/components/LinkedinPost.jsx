import React from 'react';

function LinkedInPost({ post }) {
  const {
    created_at,
    text,
    user,
    like_count,
    comment_count,
    share_count,
    source
  } = post;

  console.log("LinkedIn post");

  const cleanSource = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="linkedin-post">
      <div className="linkedin-post-header">
        <img src={user.profile_image_url_https} alt={user.name} className="linkedin-profile-image" />
        <div className="linkedin-post-header-details">
          <h2 className="linkedin-author">{user.name}</h2>
          <span className="linkedin-screen-name">@{user.screen_name}</span>
        </div>
      </div>
      <p className="linkedin-content">{text}</p>
      <div className="linkedin-post-info">
        <span className="linkedin-date-posted">{new Date(created_at).toLocaleString()}</span>
        <span className="linkedin-source">via {cleanSource(source)}</span>
      </div>
      <div className="linkedin-post-stats">
        <span className="linkedin-likes">Likes: {like_count}</span>
        <span className="linkedin-comments">Comments: {comment_count}</span>
        <span className="linkedin-shares">Shares: {share_count}</span>
      </div>
    </div>
  );
}

export default LinkedInPost;
