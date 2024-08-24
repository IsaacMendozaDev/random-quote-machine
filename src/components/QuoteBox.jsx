import { useQuoteAndAuthor } from "../hooks/useQuoteAndAuthor";

import { Quote } from "./Quote";
import { Author } from "./Author";
import { NewQuoteButton } from "./NewQuoteButton";
import { TweetQuote } from "./TweetQuote";

export function QuoteBox() {
  const { quote, author, isLoading, refreshQuoteAndAuthor } =
    useQuoteAndAuthor();

  return (
    <div
      className="card text-bg-dark shadow p-2"
      style={{
        width: "min(100dvw, 620px)",
        minHeight: "200px",
      }}
      id="quote-box"
    >
      <div className="card-body">
        <blockquote className={`blockquote ${isLoading ? "" : "fade-in"}`}>
          <Quote quote={quote} isLoading={isLoading} />
          <Author author={author} isLoading={isLoading} />
        </blockquote>
      </div>
      <div className="card-footer">
        <NewQuoteButton refreshQuoteAndAuthor={refreshQuoteAndAuthor} />
        <TweetQuote quote={quote} author={author} />
      </div>
    </div>
  );
}