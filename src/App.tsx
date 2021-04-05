import { BrowserRouter } from "react-router-dom";
import { MainVisual } from "./components/pages/mainVisual/MainVisual";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
