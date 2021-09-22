import { Container, Form, Button } from 'react-bootstrap';

import { useHistory, Link } from 'react-router-dom';

const Signin = () => {
  let history = useHistory();

  // const email = 'email@example.com';
  // const password = '123456';

  const email = null;
  const password = null;

  function handleLogin() {
    if (email && password) {
      history.push('/');
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Signin;
