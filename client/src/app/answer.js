import React from "react";

class Answer extends React.Component {
  render() {
    const {
      onHandleAnswer,
      questionId,
      choice: { id, value }
    } = this.props;
    return (
      <li key={id}>
        <input
          type="radio"
          name={`answer${questionId}`}
          value={id}
          style={{ marginRight: "10px" }}
          onClick={() => onHandleAnswer(questionId, id)}
        />
        {value}
      </li>
    );
  }
}

export default Answer;
