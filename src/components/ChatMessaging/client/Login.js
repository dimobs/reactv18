import React, { useRef } from "react";
import { Container, Form, Button } from 'react-bootstrap';

    
    export default function Login({onIdSubmit}) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
   
    onIdSubmit(idRef.current.value)
  }
  return (
    <div>
      <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group>
            <Form.Label>Enter Your id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Button type="submit" className="mr-2">Login</Button>
          <Button variant="secondary">Creat A New Id</Button>
        </Form>
      </Container>
    </div>
  )
}