import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
// The comments section is use that  take data from this.context
class Button extends Component {
  //static contextType = LanguageContext;

  //   changeLangue = () => {
  //     return this.context === "english" ? "Submit" : "Skicka in";
  //   };

  changeLangue = (langaue) => {
    return langaue === "english" ? "Submit" : "Skicka in";
  };
  render() {
    //console.log(this.context);
    //return <button className="ui button primary">{this.changeLangue()}</button>;

    return (
      <ColorContext.Consumer>
        {/** Consumer can take value is fucntion and then you can use it */}
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(langaue) => this.changeLangue(langaue)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
