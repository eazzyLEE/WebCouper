import React, { Component } from 'react';
import image from './logo-footer.png';
//import Footer from './Footer';


class Landing extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      phone: '',
      isLoggedIn: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      isLoggedIn: true
    };


    alert('An email address was submitted: ' + this.state.email);

    this.state.email = '';
    this.state.password = '';
    this.state.phone = '';


    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  render() {
    const isLoggedIn = this.state.loggedIn;
    let display;

    if (isLoggedIn) {
      display = <h1>You have successfully created a WebCouper account!</h1>;
    }
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img className="img-fluid" src={image} />
                <h1 className="display-3 mb-4">WebCouper-N-u
                </h1>
                <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
                <hr />

                {/* <a href="register.html" className="btn btn-lg btn-info mr-2">Sign Up</a>
                <a href="login.html" className="btn btn-lg btn-light">Login</a> */}
              </div>
            </div>
            <h3 className="lead">Welcome, <small>Sign up Below</small></h3>
            <p className="small">Lorem ipsum dolor sit amet, summo omnes ei mel. Vix ne nihil argumentum neglegentur, ei saperet iracundia vel. Ne est eloquentiam interpretaris, quas quidam conceptam quo et. At eam illum deserunt, in quis ipsum quaerendum eum. In etiam ignota menandri vix. Est aeterno habemus signiferumque id.
            </p>
            <div className="row">
              <div className="col-md-8 m-auto">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />

                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="phone" className="form-control form-control-lg" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
        {/* <footer className="bg-dark text-white mt-5 p-4 text-center"> */}
        {display}
        <div className="footer bg-dark text-white mt-3 p-2">
          Copyright &copy; {new Date().getFullYear()} WebCouper-N-u
          </div>
      </div >



    )
  }
}

export default Landing;