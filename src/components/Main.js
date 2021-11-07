import React, { useState} from 'react';
import logo from './images/sh-logo.png';
import mic from './images/mic.png';
import search from './images/search.png';



const Main = () => {

    const [change, setChange] = useState(<img src={logo} alt="SclassNamee hustle"/>)

    const changeValue = (event) =>{
        if (event.target.value != null || event.target.value != "") {
            setChange(event.target.value)
        }
          
        if (event.target.value ==="" || event.target.value === null) {
            setChange(<img src = {logo} />)
        }
      
    }
  
  
    return (
        <div className="main-section">
            <div className="sh-logo">{change}</div>
           
             
            <div className="input">
                <img src={search} alt="search glass" />
                <input onChange={changeValue}  type='text' />
                <img src={mic} alt="mic" />
            </div>
            <div className="my-buttons-container">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
        </div>
       
    );
    
}
export default Main;