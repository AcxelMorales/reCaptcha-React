import React, { useRef, useState } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import { Error } from './components/Error';
import { Welcome } from './components/Welcome';

export const Main = () => {
  const [state, setState] = useState({
    disabled: true,
    change: false,
    email: '',
    firstPassword: '',
    confirmPassword: '',
    error: false,
    errorMessage: ''
  });

  const { disabled, change, email, firstPassword, confirmPassword, error, errorMessage } = state;

  const captcha = useRef(null);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (email.trim() === '' && firstPassword === '' && confirmPassword === '') {
      setState({
        ...state,
        error: true,
        errorMessage: 'Todos los campos son requeridos'
      });

      return;
    }

    if (firstPassword !== confirmPassword) {
      setState({
        ...state,
        error: true,
        errorMessage: 'Las contraseñas deben de ser iguales'
      });

      return;
    }

    setState({
      ...state,
      change: true,
    });
  };

  const handleOnChangeReCaptcha = (e) => {
    if (captcha.current.getValue()) {
      setState({
        ...state,
        disabled: false,
      });
    }
  };

  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return (
    <div className="container mt-5">
      {!change && (
        <form className="w-50 m-auto" onSubmit={handleOnSubmit}>
          <h1 className="mb-4 text-muted">Registrate</h1>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              autoComplete="off"
              onChange={handleInputChange}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="firstPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="firstPassword"
              name="firstPassword"
              autoComplete="off"
              onChange={handleInputChange}
              value={firstPassword}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="off"
              onChange={handleInputChange}
              value={confirmPassword}
            />
          </div>

          <div className="mb-3 d-flex justify-content-center align-items-center">
            <ReCAPTCHA
              ref={captcha}
              sitekey={process.env.REACT_APP_KEY_RECAPTCHA}
              onChange={handleOnChangeReCaptcha}
            />
          </div>

          {error && <Error message={errorMessage} />}

          <div className="d-grid gap-2">
            <button
              disabled={disabled}
              className="btn btn-primary"
              type="submit"
            >
              Button
            </button>
          </div>
        </form>
      )}

      {change && <Welcome />}
    </div>
  );
};
