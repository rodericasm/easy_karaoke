import React from "react";
import { Router } from "@reach/router";
import KARAOKE_PAGE from "./karaoke_page";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <KARAOKE_PAGE path="/"></KARAOKE_PAGE>
      </Router>
    </div>
  );
}
