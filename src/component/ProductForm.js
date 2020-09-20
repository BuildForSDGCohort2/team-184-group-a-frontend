import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export class ProductForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Form>
              <h4>Products Data Form</h4>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Enter Product name..."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose Product Category...</option>
                      <option>Tubers</option>
                      <option>Cereals</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Location..." />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Selling price kg/per bag..."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Quantity available..."
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Contact..." />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Description..."
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Form.Group>
                  <Form.Label>Product Image</Form.Label>
                  <Form.File />
                </Form.Group>
              </Form.Row>
              <Row>
                <Col className="mx-auto">
                  <Button variant="success">Submit</Button>
                  <Button variant="primary" className="mr-2 ml-2">
                    Edit
                  </Button>
                  <Button variant="danger">Cancel</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductForm;
