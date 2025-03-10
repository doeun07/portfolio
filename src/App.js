import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Awards from "./sections/Awards";

function App() {
  return (
    <div className="scroll">
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <Awards />
      <Footer />
    </div>
  );
}
<script src="https://kit.fontawesome.com/dba8a9ea51.js" crossorigin="anonymous"></script>

export default App;
