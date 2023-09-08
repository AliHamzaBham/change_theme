import React from 'react'
import {useContext} from 'react'
import { Mode } from './Contexts';

export default function Buttons() {
    const {val, setVal} = useContext(Mode);

    function lightModeOn () {
        setVal(0);
    }

    function darkModeOn () {
        setVal(1);
    }

    function blueModeOn () {
        setVal(2);
    }

    function pinkModeOn () {
        setVal(3);
    }

  return (
    <div className='btns-container'>
      <button className='btn light-btn' onClick={lightModeOn}></button>
      <button className='btn dark-btn' onClick={darkModeOn}></button>
      <button className='btn blue-btn' onClick={blueModeOn}></button>
      <button className='btn pink-btn' onClick={pinkModeOn}></button>
    </div>
  )
}
