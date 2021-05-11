import React, { Component } from "react";
import { connect } from "react-redux";
import { SignIn, SignOut } from "./actions";
class GoogleAuthRedux extends Component {
  componentDidMount() {
    window.gapi.load("client:auth", () => {
      window.gapi.auth2
        .init({
          clientId: "your_clientId",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          // after init then call this method to decide which function is calling
          // Sign in or sign out
          this.onSignChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onSignChange);
        });
    });
  }
  onSignChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.SignIn();
    } else {
      this.props.SignOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClic = () => {
    this.auth.signOut();
  };

  renderButton() {
    if (this.props.isSignedIn === null) return <div>Page is loading</div>;
    else if (this.props.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.onSignOutClic}>
          <i className="google icon"></i>
          Sign out ReduX
        </button>
      );
    else
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sign In with google Redux
        </button>
      );
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}
const mapStateProps = (state) => {
  console.log(state.auth);
  return { isSignedIn: state.auth };
};
export default connect(mapStateProps, { SignIn, SignOut })(GoogleAuthRedux);
