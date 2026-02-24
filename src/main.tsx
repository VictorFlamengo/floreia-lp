import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ReactGA from "react-ga4"
import "./index.css";

ReactGA.initialize("G-Q6LT944YMV")

createRoot(document.getElementById("root")!).render(<App />);
