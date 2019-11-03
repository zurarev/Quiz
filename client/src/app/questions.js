import React from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { getQuestions, getAnswer } from "../api/api";
import Choices from "./choices";
import Result from "./result";

class Questions extends React.Component {
  state = {
    questions: [],
    answers: [],
    modalShow: false,
    restart: 0
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
    //ტესტის ასლის შექმნა
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
    this.setState({ modalShow: false, answers: [], restart: Math.random() });
  };

  render() {
    const { questions } = this.state;
    return (
      <Container>
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
            <Result answers={this.state.answers} />
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

export default Questions;
