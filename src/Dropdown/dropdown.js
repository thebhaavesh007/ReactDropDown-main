// Imported some of the dependencies from react
import {  useState } from "react";
// imported Style 
import Style from './dropdown.module.css';

function Dropdown() {
  // const selectRef = useRef();

  // Declared a array in which we will loop over and display as option
  const list = ["Yes", "Definitely", "Definitely Not", "Not Sure"];

  // Used a hook for showing the selected Itme
  const [selectedOption, setSelectedOption] = useState("");
  // Used another hook for storing a optionArray
  const [optionArray, setOptionArray] = useState([]);
  
  // This function will fired , when we we will enter on the Select button
  const handleMouseOver = ()=>{
    setOptionArray(list);
  }
  // This funciton will fire , when we click outside of that select button
  const handleClick = ()=>{
    setOptionArray([]);
  }
  // This funciton take care of the selected Item
  const handleOptionClick = (data)=>{
    setSelectedOption(data);
  }

  // This is the UI
  return (
    <>
      <div onClick={handleClick}>
        <h1>Should We Use Dropdown?</h1>
        <div>
          <h2>{selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className={Style.initialOption}>Select</div>
          <div className={Style.options}>
              {optionArray.map((data)=> (
                  <div onClick={() => handleOptionClick(data)} className={Style.singleOption}>{data}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
