import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Firms from "./Components/Firms";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);

        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;

        document.body.appendChild(script);
      });
  }, []);

  return (
    <>
      {resumeData && (
        <div className="App">
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Skills data={resumeData.skills} />
          <Firms data={resumeData.firms} />
          <Portfolio data={resumeData.portfolio} />
          <Footer data={resumeData.main.name} />
        </div>
      )}
    </>
  );
};

export default App;
