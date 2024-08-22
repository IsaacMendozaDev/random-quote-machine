import { useEffect, useState } from "react";
import { fetchRandomQuoteFromAPI } from "./services/quotes";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quote}%22+${author}`;

  useEffect(() => {
    fetchRandomQuoteFromAPI().then(({ quote, author }) => {
      setAuthor(author);
      setQuote(quote);
    });
  }, []);

  const handleClick = () => {
    fetchRandomQuoteFromAPI().then(({ quote, author }) => {
      setAuthor(author);
      setQuote(quote);
    });
  };

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>

      <a id="tweet-quote" href={tweetURL} target="_top _blank">
        Tweet
      </a>
      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
}

export default App;
