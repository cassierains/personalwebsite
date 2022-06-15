import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './main_site/about';
import Resume from './main_site/resume';
import WebApps from './main_site/web_apps';
import Projects from "./main_site/projects";

function App() {
    return (
        <Router>
                <Routes>
                    <Route path='/'element={<About />}/>
                    <Route path='/resume' element={<Resume />}/>
                    <Route path='/apps' element={<WebApps />}/>
                    <Route path='/projects' element={<Projects />}/>
                </Routes>
        </Router>
    );
  }
  
  export default App;