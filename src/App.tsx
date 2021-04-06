import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./providers/StateProvider";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Router />
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
