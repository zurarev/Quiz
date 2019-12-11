import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <h2>აირჩიეთ ტესტი</h2>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                <NavLink to="/test">ისტორია</NavLink>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                <NavLink to="/test2">მათემატიკა</NavLink>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                <NavLink to="/test1">ინფორმატიკა</NavLink>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                <NavLink to="/test3">გეოგრაფია</NavLink>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
