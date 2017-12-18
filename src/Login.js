import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCreditCardHolder, setLoggedInAs } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)}/> <button className="button"
            onClick={()=>setLoggedInAs(this.state.loginName)}>Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return{
    loggedInAs: state.loggedInAs,
    isCreditCardHolder: state.isCreditCardHolder,
  }
}

// const connector = connect(mappStateToProps);
// const connectedLogin = connector(Login);

// export default connectedLogin;

export default connect(mapStateToProps)(Login);