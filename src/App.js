
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileJumbotron from './components/ProfileJumbotron'
import ExperienceEducation from './components/ExperienceEducation'
import React from 'react';



function App() {
  return (
    <div className="App">
      <ProfileJumbotron />
      <ExperienceEducation />
    </div>
  );
}

export default App;
