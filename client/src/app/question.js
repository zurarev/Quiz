import React from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { getQuestions, getAnswer } from "../api/api";

class Question extends React.Component {
  state = {
    questions: [],
    answers: [],
    modalShow: false
  };

  async componentDidMount() {
    try {
      const questions = await getQuestions();
      this.setState({ questions });
    } catch (err) {
      console.log(err);
    }
  }

  handleAnswer = async (question, answerValue) => {
    //სერვისიდან წამოღება
    const { answer } = await getAnswer(question);
    //ობიექტის მომზადება
    let myAnswer = { question: question, answer: answer.id === answerValue };
    //ტეტის დაკლონვა
    let answers = [...this.state.answers];
    // მსგავსი ობიექტის ინდექსის მოძებნა
    let index = answers.findIndex(x => x.question === question);
    //შემოწმება ინდექსის და არსებობის შემთხვევაში განახლება და წინააღმდეგ შემთხვევაში ჩაწერა
    if (index !== -1) {
      answers[index] = myAnswer;
    } else {
      answers.push(myAnswer);
    }
    this.setState({ answers });
    console.log("answers", this.state.answers);
  };

  handleDone = () => {
    this.setState({ modalShow: true });
    console.log("done", this.state);
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  render() {
    const { questions } = this.state;
    return (
      <Container>
        <h2>ტესტი</h2>
        {questions &&
          questions.map(q => {
            return (
              <Row key={q.id}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>{q.id}</Card.Title>
                      <Card.Text> {q.question}</Card.Text>
                      <ul key={q.id}>
                        {q.choices.map(c => {
                          return (
                            <li key={c.id}>
                              <input
                                type="radio"
                                name={`answer${q.id}`}
                                value={c.id}
                                style={{ marginRight: "10px" }}
                                onChange={() => this.handleAnswer(q.id, c.id)}
                              />
                              {c.value}
                            </li>
                          );
                        })}
                      </ul>
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
          <Modal.Body>შედეგის გამოტანა!</Modal.Body>
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

export default Question;
