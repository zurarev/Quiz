import React from "react";

class Result extends React.Component {
  getResult = () => {
    const { answers } = this.props;
    return answers.length > 0
      ? answers.map(x => (x.answer ? 1 : 0)).reduce((a, b) => a + b)
      : 0;
  };

  render() {
    const { answers } = this.props;
    return (
      <div>
        <ul>
          {answers &&
            answers.map((a, i) => (
              <li key={i}>
                <span>{a.question}</span>
                <span>{a.answer ? " სწორია" : " შეცდომა"}</span>
              </li>
            ))}
        </ul>{" "}
        <hr />
        <h4>თქვენ დააგროვეთ {this.getResult()} ქულა</h4>
      </div>
    );
  }
}

export default Result;
