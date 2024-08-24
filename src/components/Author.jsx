// eslint-disable-next-line react/prop-types
export function Author({ author, isLoading }) {
  return (
    <footer id="author" className="blockquote-footer fs-4">
      {isLoading ? "" : author}
    </footer>
  );
}
