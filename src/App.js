import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Firms from "./Components/Firms";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <Firms data={resumeData.firms} />
      <Skills data={resumeData.skills} />
      <Portfolio data={resumeData.portfolio} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
