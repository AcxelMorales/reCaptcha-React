import React, { useRef, useState } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import { Welcome } from './components/Welcome';

export const Main = () => {
  const [state, setState] = useState({
    disabled: true,
    change: false
  });

  const captcha = useRef(null);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    setState({
      ...state,
      change: true
    });
  };

  const handleOnChangeReCaptcha = (e) => {
    if (captcha.current.getValue()) {
      setState({
        ...state,
        disabled: false
      });
    }
  };

  return (
    <div className="container mt-5">
      {!state.change && (
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
            />
          </div>

          <div className="mb-3 d-flex justify-content-center align-items-center">
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LcezdYaAAAAAObRM0a1tm3qW-ozFUwKoLnGsiIG"
              onChange={handleOnChangeReCaptcha}
            />
          </div>

          <div className="d-grid gap-2">
            <button
              disabled={state.disabled}
              className="btn btn-primary"
              type="submit"
            >
              Button
            </button>
          </div>
        </form>
      )}

      {state.change && <Welcome />}
    </div>
  );
};
