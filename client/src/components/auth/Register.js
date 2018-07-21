import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign up to get a WebCouper account</p>
              <form action="dashboard.html">
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                </div>
                <div className="form-group">
                  <input type="phone" className="form-control form-control-lg" placeholder="Phone Number" name="phone" />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              <input type="submit" className="btn btn-info btn-block mt-4" />


            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;