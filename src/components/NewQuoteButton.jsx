import useDebouncedCallback from "../hooks/useDebouncedCallback";

// eslint-disable-next-line react/prop-types
export function NewQuoteButton({ refreshQuoteAndAuthor }) {
  const debouncedRefreshQuoteAndAuthor = useDebouncedCallback(
    refreshQuoteAndAuthor,
    800
  );

  const handleClick = () => {
    debouncedRefreshQuoteAndAuthor();
  };

  return (
    <button
      type="button"
      className="btn btn-light border border-white fs-5 fw-bold me-3"
      id="new-quote"
      onClick={handleClick}
    >
      New Quote
    </button>
  );
}
