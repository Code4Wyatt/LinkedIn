import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , { Component} from "react";
import ProfileNavbar from './components/ProfileNavbar';
import ProfileFooter from './components/ProfileFooter';
import ProfileSkill from './components/ProfileSkill';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ProfileNavbar/>
          <ProfileSkill/>
          <ProfileFooter/>
          </div>
        
      </header>
    </div>
  );
}

export default App;
