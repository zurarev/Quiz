import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  getResult = () => {
    //const { answers } = this.props;
    const { answers } = this.props.answersReducer;
    return answers.length > 0
      ? answers.map(x => (x.answer ? 1 : 0)).reduce((a, b) => a + b)
      : 0;
  };

  render() {
    //const { answers } = this.props;
    const { answers } = this.props.answersReducer;
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

function mapStateToProps(state) {
  console.log("state", state);
  return state;
}

export default connect(mapStateToProps, {})(Result);
