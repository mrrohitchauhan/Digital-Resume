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
// {
//   "id": "3k24j34jkgxzzz",
//   "name": "ILearn",
//   "type": "Mobile App",
//   "domain": "Web App",
//   "class": "mobile-app",
//   "tech": "Ionic, Angular, C#",
//   "desc": "Ilearn is a hybrid mobile application, this app is only used by Deloitte employees. This app help to take online test for trainee",
//   "thumbnail": "unavailable.jpg",
//   "url": "",
//   "gallery": ["unavailable.jpg"]
// },
// {
//   "id": "bnc7bc8b7cxz",
//   "name": "Deloitte India Event",
//   "type": "Mobile App",
//   "domain": "Web App",
//   "class": "c-app",
//   "tech": "Ionic, Angular, C#",
//   "desc": "Deloitte India Event is a hybrid mobile application, this app is only used by Deloitte employees. This app intimates them for there current past and upcoming Deloitte events according to their designation and location",
//   "thumbnail": "unavailable.jpg",
//   "url": "",
//   "gallery": ["unavailable.jpg"]
// },
// {
//   "id": "zxcz7cz7z9xcd",
//   "name": "Track Truck",
//   "type": "Mobile App",
//   "domain": "Web App",
//   "class": "mobile-app",
//   "tech": "Ionic, Angular.js, C#",
//   "desc": "Track Truck is hybrid mobile application for android platform. It is mainly for the customers who want to track his vehicle current status. It include modules like Sign Up as organization or individual, my orders, and tracking the status etc.",
//   "thumbnail": "unavailable.jpg",
//   "url": "",
//   "gallery": ["unavailable.jpg"]
// }
