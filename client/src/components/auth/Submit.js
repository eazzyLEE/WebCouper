import React, { Component } from 'react'

class Submit extends Component {
  render() {
    return (
      submitForm(e) {
      e.preventDefault()
      this.props.history.push('/thank-you');
    };

    render() {
      return (
        <div>
          <form onSubmit={this.submitForm.bind(this)}>
            <button type="submit">Submit</button>
          </form>
        </div>
      )

    }
    )
  }
}

export default withRouter(Submit);