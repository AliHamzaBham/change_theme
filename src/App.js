import './App.css';
import {  useState } from 'react'
import { Mode } from './Components/Contexts';
import RightComp from './Components/RightComp';
import LeftComp from './Components/LeftComp';
import Buttons from './Components/Buttons';

function App() {
  let [val, setVal] = useState(0);

    let styleBack;
    let styleText;
    if (val === 0) {
        styleBack = {
            backgroundColor: "white",
        }
        styleText = {
            color: "#252525"
        }
    }
    else if(val === 1) {
        styleBack = {
            backgroundColor: "#252525",
            border: "1px solid white"
        }
        styleText = {
            color: "white"
        }
    }
    else if(val === 2) {
      styleBack = {
          backgroundColor: "rgb(35, 35, 130)",
          border: "1px solid white"
      }
      styleText = {
          color: "white"
      }
    }
    else if(val === 3) {
      styleBack = {
          backgroundColor: "rgb(169, 108, 118)",
          border: "1px solid white"
      }
      styleText = {
          color: "black"
      }
    }

  return (
    <div className="App" style={styleBack}>
        <Mode.Provider value={{val , setVal}}>
          <Buttons/>
            <LeftComp style1={styleBack} style2={styleText}/>
            <RightComp style1={styleBack} style2={styleText}/>
        </Mode.Provider>
    </div>
  );
}

export default App;
