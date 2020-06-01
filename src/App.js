import React from 'react';

//Components

import Menu from './components/menu/menu';
import Profile from './components/profile/profile';
import Invetment from './components/investment/invetnment';
import Goals from './components/goal/goals';
import Briefcase from './components/briefcase/briefcase';
import Saving from './components/saving/saving';
import Information from './components/information/information';
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <Profile />
        <Invetment />
        <Goals />
        <Briefcase />
        <Saving />
        <Information />
      </body>
      <footer>
        <Menu />
      </footer>
    </div>
  );
}

export default App;
