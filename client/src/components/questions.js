import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  loadQuestions,
  setAnswer,
  increment,
  decrement
} from "../actions/Actions";
import Choices from "./choices";
import Result from "./result";

class Questions extends Component {
  state = {
    modalShow: false,
    restart: 0
  };

  async componentDidMount() {
    try {
      await this.props.loadQuestions();
    } catch (err) {
      console.log(err);
    }
  }

  handleAnswer = async (question, answerValue) => {
    try {
      await this.props.setAnswer(question, answerValue);
    } catch (err) {
      console.log(err);
    }
  };

  handleDone = () => {
    this.setState({ modalShow: true });
  };

  // shuffle(array) {
  //   let ctr = array.length;
  //   let temp;
  //   let index;
  //   while (ctr > 0) {
  //     index = Math.floor(Math.random() * ctr);
  //     ctr--;
  //     temp = array[ctr];
  //     array[ctr] = array[index];
  //     array[index] = temp;
  //   }
  //   return array;
  // }

  handleClose = () => {
    //ტესტის თავიდან დაწყების ლოგიკა
    this.setState({
      modalShow: false,
      restart: Math.random()
    });
  };

  render() {
    const { questions } = this.props.questionsReducer;
    const { answers } = this.props.answersReducer;
    const { counter } = this.props.counterReducer;
    return (
      <Container>
        <div>
          <h1>{this.props.name}</h1>
          <h1>{counter}</h1>
          <button onClick={this.props.decrement}>decrement</button>
          <button onClick={this.props.increment}>increment</button>
        </div>
        <h2>ტესტი</h2>
        {questions &&
          questions.map((q, i) => {
            return (
              <Row key={q.id}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>{q.id}</Card.Title>
                      <Card.Text> {q.question}</Card.Text>
                      <Choices
                        key={this.state.restart} //რესტარტის შემთხვევაში მიენიჭება სხვა რიცხვი და გადაიხატება ეს კომპონენტი
                        questionId={q.id}
                        choices={q.choices}
                        handleAnswer={this.handleAnswer}
                      />
                    </Card.Body>
                  </Card>
                  <br />
                </Col>
              </Row>
            );
          })}

        <Button onClick={this.handleDone}>ტესტის დასრულება</Button>

        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>შედეგი</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Result answers={answers} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              დახურვა
            </Button>
          </Modal.Footer>
        </Modal>

        <br />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return state;
}

export default connect(mapStateToProps, {
  loadQuestions,
  setAnswer,
  increment,
  decrement
})(Questions);
