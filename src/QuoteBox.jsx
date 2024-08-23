import { useEffect, useState } from "react";
import { fetchRandomQuoteFromAPI } from "./services/quotes";

export function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const svgLoading = (
    <svg
      fill="#f7f7f7"
      width="100px"
      height="100px"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      className="blink"
    >
      <path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z" />
    </svg>
  );
  const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quote}%22+${author}`;

  const fetchAndSetQuoteAndAuthor = () => {
    fetchRandomQuoteFromAPI()
      .then(({ quote, author }) => {
        setAuthor(author);
        setQuote(quote);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAndSetQuoteAndAuthor();
  }, []);

  const handleClick = () => {
    setLoading(true);
    fetchAndSetQuoteAndAuthor();
  };
  return (
    <div
      className="card text-bg-dark shadow p-2"
      style={{
        width: "min(100dvw, 620px)",
        minHeight: "200px",
        transition: "height ease 3s",
      }}
      id="quote-box"
    >
      <div className="card-body">
        <blockquote className={`blockquote ${loading ? "" : "fade-in"}`}>
          <p className="card-text fs-3" id="text">
            {loading ? svgLoading : quote}
          </p>
          <footer id="author" className="blockquote-footer fs-4">
            {loading ? "" : author}
          </footer>
        </blockquote>
      </div>
      <div className="card-footer">
        <button
          type="button"
          className="btn btn-light border border-white fs-5 fw-bold me-3"
          id="new-quote"
          onClick={handleClick}
        >
          New Quote
        </button>
        <a
          className="btn btn-secondary fs-5"
          id="tweet-quote"
          href={tweetURL}
          target="_top _blank"
        >
          <i className="bi bi-twitter-x"></i>
        </a>
      </div>
    </div>
  );
}
