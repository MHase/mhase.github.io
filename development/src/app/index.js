import React  from 'react';
import {render} from 'react-dom';

import "../css/master.scss";
import {Project} from './components/Project'
import {Preloader} from './components/Preloader';


class App extends React.Component {
  render() {
    return (
    <div>
			<Preloader />
			{/* <Project /> */}
    </div>
    );
  }
}

render(<App/>, document.getElementById('preloader'));
render(<Project/>, document.getElementById('projects-react'));


$(document).ready(() => {
	setTimeout((x = 500) => {
		$('.preloader').fadeOut(x, () => {
			$('.preloader-container').fadeOut(x, () => {

			});
		});
	}, 1000);

});
