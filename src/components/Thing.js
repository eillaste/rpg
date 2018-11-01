import React, { Component } from 'react';
//If you want to print the change after a call to setState, use the optional callback parameter:
class Thing extends Component {
	state = {};

	handleClick = () => {
		this.setState({ yoro: this.state.text });
	};

	changeText(e) {
		this.setState({ text: e.target.value }, function() {
			console.log(this.state.text);
		});
	}

	render() {
		let reebok = 123;
		return (
			<div>
				<input onChange={this.changeText.bind(this)} />
				<button reebok={reebok} onClick={this.handleClick}>
					Click me!
				</button>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

export default Thing;
