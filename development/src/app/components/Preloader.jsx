import React from 'react';
import {render} from 'react-dom';

export class Preloader extends React.Component {
  render(){
    return (
      <div className="preloader-container flex">
        <div className="preloader">
          <div className="preloader-inner preloader-one"></div>
          <div className="preloader-inner preloader-two"></div>
          <div className="preloader-inner preloader-three"></div>
        </div>
      </div>
    )
  }
}
