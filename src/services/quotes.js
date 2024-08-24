const QUOTE_ENDPOINT_OBJECT = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_QUOTE_KEY;

export const fetchRandomQuoteFromAPI = async () => {
  try {
    const response = await fetch(QUOTE_ENDPOINT_OBJECT, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Error in request");

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0)
      throw new Error("Unexpected API response format");

    // The [] is used because the JSON returns an array of only one element, and it is that element that is needed.
    const [{ quote, author }] = data;

    if (quote.length <= 180 && quote.length >= 60) {
      return {
        quote: quote,
        author: author,
      };
    }
    return await fetchRandomQuoteFromAPI();
  } catch (error) {
    console.error("An error ocurred: ", error);
    return { quote: "No quote available", author: "Unknown" };
  }
};
