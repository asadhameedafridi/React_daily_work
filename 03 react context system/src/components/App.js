import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class App extends Component {
  state = { language: "english" };
  changeLanuge = (language) => {
    this.setState({ language });
  };
  render() {
    // console.log(this.state.language);
    return (
      <div className="ui container">
        Selecct Lanugage
        <i className="flag se" onClick={() => this.changeLanuge("swdish")} />
        <i className="flag us" onClick={() => this.changeLanuge("english")} />
        {/** you can use <ColorContext.Provider> here as well */}
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider
            value={this.state.language === "english" ? "red" : "green"}
          >
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
