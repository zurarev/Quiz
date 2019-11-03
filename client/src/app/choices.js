import React from "react";
import Answer from "./answer";

class Choices extends React.Component {
  render() {
    const { questionId, choices, handleAnswer } = this.props;
    return (
      <ul key={questionId}>
        {choices.map(choice => (
          <Answer
            key={choice.id}
            questionId={questionId}
            choice={choice}
            onHandleAnswer={handleAnswer}
          />
        ))}
      </ul>
    );
  }
}

export default Choices;
