import React, { Component } from 'react';

export default class CreditCardApplication extends Component {
  render() {
    const { loggedInAs, isCreditCardHolder, setIsCreditCardHolder } = this.props;

    return (
      <div className="credit-card-application">
        {!loggedInAs && "Must log in first"}
        {loggedInAs && <div>
          {!isCreditCardHolder && <div>
            <p>Hi {loggedInAs}, apply now!</p>
            <p><button className="button" onClick={()=>setIsCreditCardHolder(true)}>Yes, sign me up!</button></p>
          </div>}
          {isCreditCardHolder && "Thanks for signing up!"}
        </div>}
      </div>
    )
  }
};
