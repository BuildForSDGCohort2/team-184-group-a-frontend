import React, { Component } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
export class ProductsForm extends Component {
  render() {
    return (
      <Container>
        <Col md={8} className="mt-3">
          <h2>Products Data Form</h2>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="Product Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control as="select">
                    <option></option>
                    <option>Tubers</option>
                    <option>Cereals</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Product Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Selling Price kg/per bag</Form.Label>
                  <Form.Control type="text" placeholder="Product Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Quantity available</Form.Label>
                  <Form.Control type="text" placeholder="Product Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder="Product description"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Upload Product Image</Form.Label>
                  <Form.File type="text" placeholder="Product Name" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Container>
    );
  }
}

export default ProductsForm;
