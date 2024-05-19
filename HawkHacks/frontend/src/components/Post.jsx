import React from 'react';

function TwitterPost({ post }) {
  const {
    created_at,
    text,
    user,
    retweet_count,
    favorite_count,
    source
  } = post;

  const cleanSource = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={user.profile_image_url_https} alt={user.name} className="profile-image" />
        <h2 className="author">{user.name}</h2>
        <span className="screen-name">@{user.screen_name}</span>
      </div>
      <p className="content">{text}</p>
      <div className="post-info">
        <span className="date-posted">{new Date(created_at).toLocaleString()}</span>
        <span className="source">via {cleanSource(source)}</span>
      </div>
      <div className="post-stats">
        <span className="retweets">Retweets: {retweet_count}</span>
        <span className="likes">Likes: {favorite_count}</span>
      </div>
    </div>
  );
}

export default TwitterPost;
