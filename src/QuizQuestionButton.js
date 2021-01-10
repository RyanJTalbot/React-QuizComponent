import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';

class QuizQuestionButton extends Component {
	render() {
		return (
			<ul this.props.quiz_question.map((answer_options, index) => {
				return <button key={index}>{button_text.answer_options
				}</button>
			}) >

				<li >
					<button>{this.props.button_text}</button>
				</li>

			</ul>

		);
	}
}
export default QuizQuestionButton;
