import React from "react";
import Header from "./components/Header";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="scroll">
      <Header />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
