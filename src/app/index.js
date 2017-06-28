import React  from 'react';
import {render} from 'react-dom';

import "../css/master.scss";
import './components/Project'
let projects = [
	{name:"brain", info:"simple music player", github_link:"", link:"../projects/brainhub"},
	{name:"cloud", info:"cloud registration form", github_link:"", link:"../projects/clouds"},
	{name:"cloud", info:"cloud registration form", github_link:"", link:"../projects/clouds"},
	{name:"cloud", info:"cloud registration form", github_link:"", link:"../projects/clouds"},

];

class App extends React.Component {
  render() {
    return (
    <div>
      {/* <Project /> */}
    </div>
    );
  }
}

// render(<App/>, document.getElementById('app'));


$(document).ready(() => {
	setTimeout((x = 500) => {
		$('.preloader').fadeOut(x, () => {
			$('.preloader-container').fadeOut(x, () => {

			});
		});
	}, 1000);

});
