import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { RainbowBackground } from "./components/RainbowBackground";
import { QuoteBox } from "./components/QuoteBox";

function App() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center "
      style={{
        height: "100dvh",
      }}
    >
      <RainbowBackground />
      <QuoteBox />
    </div>
  );
}

export default App;
