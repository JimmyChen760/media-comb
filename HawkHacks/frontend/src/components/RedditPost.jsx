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
    <div className="reddit-post">
      <div className="reddit-post-header">
        <img src={user.profile_image_url_https} alt={user.name} className="reddit-profile-image" />
        <div className="reddit-post-header-details">
          <h2 className="reddit-author">{user.name}</h2>
          <span className="reddit-screen-name">@{user.screen_name}</span>
          <span className="reddit-subreddit">in {subreddit}</span>
        </div>
      </div>
      <p className="reddit-content">{text}</p>
      <div className="reddit-post-stats">
        <span className="reddit-upvotes">Upvotes: {upvote_count}</span>
        <span className="reddit-comments">Comments: {comment_count}</span>
      </div>
      <div className="reddit-post-info">
        <span className="reddit-date-posted">{new Date(created_at).toLocaleString()}</span>
        <span className="reddit-source">via {cleanSource(source)}</span>
      </div>
    </div>
  );
}

export default RedditPost;
