import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Box from './Component/Box';
import BoxDisplay from './Component/Boxdisplay';

function App() {

  const [BoxColor, setBoxColor] = useState([])

  const boxcolor = (boxColor) => {
    setBoxColor([...BoxColor,boxColor])
  }

  return (
    <div className="App">
        <Box NewBoxColor = { boxcolor }></Box>
        <BoxDisplay color={BoxColor}></BoxDisplay>
    </div>
  );
}

export default App;
