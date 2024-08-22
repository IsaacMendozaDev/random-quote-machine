const QUOTE_ENDPOINT_OBJECT = "https://api.api-ninjas.com/v1/quotes";
const API_KEY = "hmeNROnLb+thKNk1dQn1VA==ugX8fto3ykCJVn7w";

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

    // The [] is used because the JSON returns an array of only one element, and it is that element that is needed.
    const [{ quote, author }] = data;

    return {
      quote: quote,
      author: author,
    };
  } catch (error) {
    console.error("An error ocurred: ", error);
    //todo: Show in the UI the error.
  }
};
