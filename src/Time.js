import React, { Component } from 'react';
import './App.css';

class Time extends Component {
    
  
    render() { 
        return ( 

            <div>
                 <div className="container">
        <div className="contour">
            <div className="time-digits">
                00:45:00
            </div>
            <div className="time-text">
                <div className="time">Hour</div>
                <div className="time">Minute</div>
                <div className="time">Second</div>
            </div>
        </div>
    </div>
            </div>
         );
    }
}
 
export default Time ;