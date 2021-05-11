import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    if (window.gapi)
      window.gapi.load("client:auth2", () => {
        console.log(window.gapi);
        window.gapi.client
          .init({
            clientId: "your_clientId",
            scope: "email",
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            this.auth.isSignedIn.listen(this.onSignChange);
          });
      });
  }

  onSignChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderButton() {
    if (this.state.isSignedIn === null)
      return <div>The application is loading </div>;
    else if (this.state.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign out
        </button>
      );
    else
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sing In with google
        </button>
      );
  }
  render() {
    return <div>{this.renderButton()}</div>;
  }
}

export default GoogleAuth;
