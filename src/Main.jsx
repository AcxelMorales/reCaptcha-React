import React from 'react';

import { Welcome } from './components/Welcome';

export const Main = () => {
  const handleOnSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <div className="container mt-5">
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

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Button
          </button>
        </div>
      </form>

      <Welcome />
    </div>
  );
};
