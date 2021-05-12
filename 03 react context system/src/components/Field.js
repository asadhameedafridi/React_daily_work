import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
class Field extends Component {
  static contextType = LanguageContext;

  onChangeLanguage() {
    return this.context === "english" ? "Name" : "namn";
  }
  render() {
    return (
      <div className="ui field">
        <label>{this.onChangeLanguage()}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
