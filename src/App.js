import React from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';

import Blank1 from "./components/Blank1";
import {PatientInfo, AgentWorkQueue} from "./components";

function App() {
  return (
    <Router>
        <div className="content">
          <Header projectName={'Aleracare'} />
          <Route exact path="/" component={Home} />
          <Route path = "/Blank1" component={Blank1} />
          <Route path = "/agent-work" component={AgentWorkQueue} />
          <Route path = "/patient-info" component={PatientInfo} />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </Router>
  );
}

export default App;
