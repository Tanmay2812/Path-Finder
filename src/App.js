import React from 'react';
import PathFindingVisualizer from './components/PathFindingVisualizer/PathFindingVisualizer';
import { FaGithub } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <PathFindingVisualizer></PathFindingVisualizer>
      <footer className="foot">
        <p>&copy; PATH-FINDING-VISUALISER by TANMAY MALLICK
          <a href="" className="social"><FaGithub size='1.3em' color="" /></a></p>
      </footer>
    </div >
  );
}

export default App;
