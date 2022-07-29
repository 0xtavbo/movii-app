import React from 'react'
import { LoginContainerStyled, LoginWrapper, LoginButtonStyled, InputStyled, TitleStyled } from './LoginStyles'
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
import useAxiosLogin from '../../hooks/useAxiosLogin';

const Login = ({handleLogin}) => {
  const navigate = useNavigate();
  const { postLoginUser } = useAxiosLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || password === '') {
      swal({text: "Fields cannot be blank", html: true});
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      swal({text: "Email invalid", html: true});
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swal({text: "Credentials invalid", html: true});
      return;
    }

    postLoginUser(email, password).then(result => {
      if (result) {
        handleLogin();
        navigate('/discover');
        swal({
          title: "Logon successfully",
          icon: "success",
          timer: 1500
        });  
      } else {
        swal({
          title: "Logon failed"
        });
      }
    });
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