import React from "react";
import Header from "./components/Header";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="scroll">
      <Header />
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}
<script src="https://kit.fontawesome.com/dba8a9ea51.js" crossorigin="anonymous"></script>

export default App;
