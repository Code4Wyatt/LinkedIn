import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , { Component} from "react";
import ProfileNavbar from './components/ProfileNavbar';
import ProfileFooter from './components/ProfileFooter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ProfileNavbar/>
          <ProfileFooter/>
          </div>
        
      </header>
    </div>
  );
}

export default App;
