import React from 'react'
import { LoginContainerStyled, LoginWrapper, LoginButtonStyled, InputStyled, TitleStyled } from './LoginStyles'
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || password === '') {
      swal(<h2>Fields cannot be blank</h2>);
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      swal(<h2>Email invalid</h2>);
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swal(<h2>Credentials invalid</h2>);
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', {email, password})
      .then(res => {
        swal(<h2>Logged successfully</h2>)
        const tokenReceived = res.data.token;
        localStorage.setItem('token', tokenReceived);
        navigate('/list');
      })

  }

  return (
    <LoginWrapper>
      <LoginContainerStyled>
        <TitleStyled>Login</TitleStyled>
        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
          <InputStyled type="email" name="email" placeholder='challenge@alkemy.org'/>
          </label>
          <br />
          <label>
            <span>Password:</span>
          <InputStyled type="password" name="password" placeholder='react'/>
          </label>
          <br />
          <LoginButtonStyled type="submit">Enter</LoginButtonStyled>
        </form>
      </LoginContainerStyled>
    </LoginWrapper>
  )
}

export default Login