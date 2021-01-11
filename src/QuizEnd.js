import React, { Component } from 'react';

handleResetClick() {
	this.props.resetClickHandler()
}

class QuizEnd extends Component {
	render() {
		return (
			<div>
				<p>Thanks for playing!</p>
				<a onClick={this.handleResetClick.bind(this)} href=''>
					Reset Quiz
				</a>
			</div>
		);
	}
}

export default QuizEnd;
