import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { RainbowBackground } from "./RainbowBackground";
import { QuoteBox } from "./QuoteBox";

function App() {
  return (
    <>
      <RainbowBackground />

      <div
        className="container d-flex justify-content-center align-items-center "
        style={{
          height: "100dvh",
        }}
      >
        <QuoteBox />
      </div>
    </>
  );
}

export default App;
