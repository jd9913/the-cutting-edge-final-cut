import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

import { Form } from "react-bootstrap";
import heroImage from "../assets/hero-image.jpeg";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">
        ← Go to Signup
      </Link>

      <h2><strong>Login</strong></h2>
      <form onSubmit={handleFormSubmit}>
      <Form.Group>
        <div className="flex-row space-between my-2">
          <Form.Label htmlFor="email">Email address:</Form.Label>
          <Form.Control
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        </Form.Group>
        <Form.Group>
        <div className="flex-row space-between my-2">
          <Form.Label htmlFor="pwd">Password:</Form.Label>
          <Form.Control
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {
          error ? <div>
            <p className="error-text" >The provided credentials are incorrect</p>
          </div> : null
        }
         </Form.Group>
         <Form.Group>
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
        </Form.Group>
      </form>
      <div>
      <img src={heroImage} className='heroImage' alt='scissors and comb' />
      </div>
    </div>
  );
}


export default Login;