import React, { useState } from 'react';
import { Button, Modal, Form, Container, Row, Col, Card } from 'react-bootstrap';

function AddEmployee() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [available, setAvailable] = useState("");
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveData = () => {
        localStorage.setItem('name', name)
        localStorage.setItem('department', department)
        localStorage.setItem('available', available)
    }


  
    return (
      <>
      <Container fluid>
      <Row>
        <Col md={6}>
        <Card style={{ height: ""}}>
        <Card.Body>
            <Button variant="primary" onClick={handleShow}>
             Add Employee
            </Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={saveData}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.taget.value)} />
            </Form.Group>

            

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select" value={department} onChange={e=> setDepartment(e.taget.value)}>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Testing</option>
                    <option>Deployment</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Available" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
          </Modal.Body>
        </Modal>
        </Container>
      </>
    );
  }

export default AddEmployee;
  