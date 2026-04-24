import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./Pages/Home";
import { useState } from "react";

export function App() {
  const [state, setIsHome] = useState(true);

  return <Home />;
}
