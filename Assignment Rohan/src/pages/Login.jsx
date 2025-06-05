// src/Component/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Clear previous errors
    setErrorEmail('');
    setErrorPassword('');

    let valid = true;

    // Basic validation checks
    if (!email) {
      setErrorEmail('Please enter email.');
      valid = false;
    }

    if (!password) {
      setErrorPassword('Please enter password.');
      valid = false;
    }

    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailPattern.test(email)) {
      setErrorEmail('Please enter a valid email address.');
      valid = false;
    }

    // If all validation passes, redirect to home page
    if (valid) {
      navigate('/home');
    }
  };

  return (
    <section className="vh-100 pt-32 bg-slate-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              {/* Social media login */}
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              {/* Divider */}
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label">Email address <span className='text-red-700'>*</span></label>

                <input
                  type="email"
                  className={`form-control form-control-lg ${errorEmail ? 'is-invalid' : ''}`}
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errorEmail && (
                  <div className="invalid-feedback" style={{ color: 'red' }}>
                    {errorEmail}
                  </div>
                )}
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <label className="form-label">Password <span className='text-red-700'>*</span></label>

                <input
                  type="password"
                  className={`form-control form-control-lg ${errorPassword ? 'is-invalid' : ''}`}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorPassword && (
                  <div className="invalid-feedback" style={{ color: 'red' }}>
                    {errorPassword}
                  </div>
                )}
              </div>

              {/* Remember me checkbox and Forgot password link */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              {/* Login button and Register link */}
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{' '}
                  <a href="/registration" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
