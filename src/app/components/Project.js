import React from 'react';
import {render} from 'react-dom';


let projects = [
	{name:"cloud", info:"cloud registration form", github_lin:"", link:"../projects/clouds"},
	{time:"2:35", artist:"Icona Pop", title:"I Love It"},
];

export class Project extends React.Component {
  render(){
    return (
      <div className="project cloud flex">
        <img src="../cloud.png" alt=""/>
        <div className="project-info">
          cloud registration form
        </div>
        <div className="project-link">
          <a href="#">
            <img src="../octocat.png" alt="" width="30px"/>
          </a>
          <a href="../projects/clouds">
            <img src="../link.png" alt="" width="30px"/>
          </a>
        </div>
      </div>
    )
  }
}
