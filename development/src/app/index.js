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
  notifyMe("Don't be shy, say hello sykula.maciek@gmail.com ^^");

});


// DESKTOP NOTIFICATIONS
function notifyMe(msg) {
  // Sprawdzenie czy przeglądarka wspiera powiadomienia
  if (!("Notification" in window)) {
    alert("Ta przeglądarka nie wspiera powiadomień.");
  }
  // Sprawdzenie czy użytkownik zezwolił na wyświetlanie powiadomień
  else if (Notification.permission === "granted") {
    // Jeżeli wszystko się zgadza wyświetlamy powiadomienie
    var notification = new Notification(msg);
  }
  // W innym przypadku musimy zapytać użytkownika o zgodę
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // Jeżeli użytkownik wyraził zgodę - wyświetlamy powiadomienie
      if (permission === "granted") {
        var notification = new Notification(msg);
      }
    });
  }
}
