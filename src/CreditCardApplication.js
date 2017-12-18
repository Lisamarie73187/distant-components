import React, { Component } from 'react';

import { connect } from 'react-redux';

class CreditCardApplication extends Component {
  render() {
    const { loggedInAs, isCreditCardHolder} = this.props;

    return (
      <div className="credit-card-application">
        {!loggedInAs && "Must log in first"}
        {loggedInAs && <div>
          {!isCreditCardHolder && <div>
            <p>Hi {loggedInAs}, apply now!</p>
            <p><button className="button">Yes, sign me up!</button></p>
          </div>}
          {isCreditCardHolder && "Thanks for signing up!"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    loggedInAs: state.loggedInAs,
    isCreditCardHolder: state.isCreditCardHolder,
  }
};

export default connect (mapStateToProps)(CreditCardApplication);