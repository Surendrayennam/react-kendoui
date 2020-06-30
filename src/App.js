import React from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllRoutes from './routes/RootRouter';

function App() {
  return (
    <Router>
        <div className="content">
          <Header projectName={'Aleracare'} />
          <AllRoutes />
        </div>
    </Router>
  );
}

export default App;
