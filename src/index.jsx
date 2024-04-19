import { createRoot } from "react-dom/client";
import App from "./App";
import { MockTopicsProvider } from "./context/MockTopicsContext.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <MockTopicsProvider>
    <App />
  </MockTopicsProvider>,
);
