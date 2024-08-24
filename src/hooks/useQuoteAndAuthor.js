import { useState, useEffect } from "react";
import { fetchRandomQuoteFromAPI } from "../services/quotes";

export const useQuoteAndAuthor = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const refreshQuoteAndAuthor = () => {
    setIsLoading(true);
    fetchRandomQuoteFromAPI()
      .then(({ quote, author }) => {
        setAuthor(author);
        setQuote(quote);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(refreshQuoteAndAuthor, []);

  return { quote, author, isLoading, refreshQuoteAndAuthor };
};
