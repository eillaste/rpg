import React, { Component } from 'react';

class Thing extends Component {
	state = {};

	handleClick() {
		this.setState({ yoro: this.state.text });
	}

	changeText(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<div>
				<input onChange={this.changeText.bind(this)} />
				<button onClick={this.handleClick.bind(this)}>Click be</button>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

export default Thing;
