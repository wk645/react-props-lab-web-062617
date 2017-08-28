// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
	render() {
		return (
			<div className="spaceship">
				<h2>Name: {this.props.name}</h2>
				<h2>Speed: {this.props.speed}</h2>
				<h2>Rockets: {this.props.hasRockets}</h2>
				<h2>Colors: {this.props.colors}</h2>
			</div>
			);
	}
}

Spaceship.defaultProps = {
	speed: 'slow',
	hasRockets: false,
	colors: ['black', 'red']
};

ReactDOM.render(
	<Spaceship 
	name=""
	/>,
	document.getElementById('root')
	) 