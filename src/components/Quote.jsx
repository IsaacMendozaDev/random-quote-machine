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

// eslint-disable-next-line react/prop-types
export function Quote({ quote, isLoading }) {
  return (
    <p className="card-text fs-3" id="text">
      {isLoading ? svgLoading : quote}
    </p>
  );
}