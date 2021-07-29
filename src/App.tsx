import "./App.css";
import { RouterConfig } from "navigation/RouterConfig";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
