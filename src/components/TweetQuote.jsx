// eslint-disable-next-line react/prop-types
export function TweetQuote({ quote, author }) {
  const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quote}%22+${author}`;

  return (
    <a
      className="btn btn-secondary fs-5"
      id="tweet-quote"
      href={tweetURL}
      target="_top _blank"
    >
      <i className="bi bi-twitter-x"></i>
    </a>
  );
}
