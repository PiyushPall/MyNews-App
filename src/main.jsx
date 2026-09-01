import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Newscontextprovider } from "./Context/NewsContext.jsx";

createRoot(document.getElementById("root")).render(
  <Newscontextprovider>
    <App />
  </Newscontextprovider>,
);
