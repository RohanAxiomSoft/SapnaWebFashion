// src/Component/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Clear previous errors
    setErrorEmail('');
    setErrorPassword('');
    setErrorConfirmPassword('');

    let valid = true;

    // Basic validation checks
    if (!email.trim()) {
      setErrorEmail('Please enter email.');
      valid = false;
    }

    if (!password) {
      setErrorPassword('Please enter password.');
      valid = false;
    }

    if (password !== confirmPassword) {
      setErrorConfirmPassword('Passwords do not match.');
      valid = false;
    }

    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailPattern.test(email)) {
      setErrorEmail('Please enter a valid email address.');
      valid = false;
    }

    // If all validation passes, redirect to login page
    if (valid) {
      alert('Registration successful!');
      navigate('/');
    }
  };

  return (
    <section className="vh-100 pt-32 bg-slate-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://media0.giphy.com/media/2Eh9l5e0QH41sg0bbL/200w.gif?cid=6c09b952udumfk2p01euw8juhnc548na0zmxccw3uazjgrv3&ep=v1_gifs_search&rid=200w.gif&ct=g"
              className="h-80 w-80"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
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

              {/* Confirm Password input */}
              <div className="form-outline mb-4">
                <label className="form-label">Confirm Password <span className='text-red-700'>*</span></label>
                <input
                  type="password"
                  className={`form-control form-control-lg ${errorConfirmPassword ? 'is-invalid' : ''}`}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errorConfirmPassword && (
                  <div className="invalid-feedback" style={{ color: 'red' }}>
                    {errorConfirmPassword}
                  </div>
                )}
              </div>

              {/* Register button */}
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={handleRegister}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{' '}
                  <a href="/" className="link-danger">
                    Login
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

export default Registration;
