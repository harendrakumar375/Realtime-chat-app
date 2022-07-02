import React from "react";
import './InfoBar.css';


const InfoBar = ({room})=>{
    return(
    <div className="infoBar"> 
    <div className="leftInnerContainer">
        <img className="onlineIcon" src="https://cdn-icons-png.flaticon.com/128/25/25694.png" height="30px" width="30px" alt="online "/>
        <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
        <a href="/"> <img src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png" height="40px" width="40px" alt="close " /></a>
    </div>
    </div>
    );
}

export default InfoBar;