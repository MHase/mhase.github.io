import React from 'react';
import {render} from 'react-dom';


let projects = [
	{name:"brain", info:"simple music player", github_link:"https://github.com/MHase/brainhub_frontend", link:"../projects/brainhub"},
	{name:"color", info:"color picker without any major design", github_link:"https://github.com/MHase/color_picker", link:"../projects/color-picker"},
	{name:"cloud", info:"cloud registration form", github_link:"https://github.com/MHase/10clouds_frontend", link:"../projects/clouds"},
	{name:"slider", info:"image slider for small library", github_link:"https://github.com/MHase/Image-slider", link:"../projects/slider"},
	{name:"netguru", info:"simple radio widget for junior developer", github_link:"https://github.com/MHase/netguru_frontend_junior", link:"../projects/netguru"},
	{name:"el_passion", info:"frontend of app for tracking github issues", github_link:"https://github.com/MHase/el_passion_frontend", link:"../projects/el_passion"},

	{name:"more", info:"more to come...", github_link:"", link:""}

];


export class Project extends React.Component {
  render(){
    return (

			<div>
				<div className="projects-container flex" id="projects">
					{projects.map((project, i) =>
						<div className={"project flex " + project.name} key={i}>
							<img src={require('../../img/projects/' + project.name + '.png')} alt={project.name}/>
							<div className="project-info">
								{project.info}
							</div>
							<div className="project-link">
								{project.github_link != '' ?
									<div>
										<a href={project.github_link}>
											<img src={require('../../img/projects/octocat.png')} alt="" width="30px"/>
										</a>
										<a href={project.link}>
											<img src={require('../../img/projects/link.png')} alt="" width="30px"/>
										</a>
									</div>
								: null
								}
							</div>
						</div>

					)}
				</div>
			</div>
    )
  }
}
