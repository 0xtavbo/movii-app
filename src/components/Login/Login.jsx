import React, { useState, useEffect } from 'react'
import { LoginContainerStyled, LoginWrapper, LoginButtonStyled, InputStyled, TitleStyled } from './LoginStyles'
import swal from '@sweetalert/with-react';
import useAxiosLogin from '../../hooks/useAxiosLogin';
import {useSelector} from 'react-redux';

const Login = () => {
  const { loginSuccess, postLoginUser } = useAxiosLogin();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || password === '') {
      swal({text: "Fields cannot be blank", html: true});
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      swal({text: "Email invalid", html: true});
      return;
    }

    if (email !== 'eve.holt@reqres.in' || password !== 'cityslicka') {
      swal({text: "Credentials invalid", html: true});
      return;
    }

    postLoginUser(email, password);
  }

  useEffect(() => {
    if (isLoggedIn) {
      swal({
        title: "Logon successfully",
        icon: "success",
        timer: 1250
      });
    }
  }, [isLoggedIn])

  return (
    <LoginWrapper>
      <LoginContainerStyled>
        <TitleStyled>Login</TitleStyled>

        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
            <InputStyled
              type="email"
              name="email"
              placeholder='eve.holt@reqres.in'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            <span>Password:</span>
            <InputStyled
              type="password"
              name="password"
              placeholder='cityslicka'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>

          <br />
          <LoginButtonStyled type="submit">Login</LoginButtonStyled>
        </form>

      </LoginContainerStyled>
    </LoginWrapper>
  )
}

export default Login