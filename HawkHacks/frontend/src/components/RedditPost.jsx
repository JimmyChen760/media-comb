import React from 'react';

function RedditPost({ post }) {
  const {
    created_at,
    text,
    user,
    subreddit,
    upvote_count,
    comment_count,
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
        <span className="subreddit">in {subreddit}</span>
      </div>
      <p className="content">{text}</p>
      <div className="post-info">
        <span className="date-posted">{new Date(created_at).toLocaleString()}</span>
        <span className="source">via {cleanSource(source)}</span>
      </div>
      <div className="post-stats">
        <span className="upvotes">Upvotes: {upvote_count}</span>
        <span className="comments">Comments: {comment_count}</span>
      </div>
    </div>
  );
}

export default RedditPost;