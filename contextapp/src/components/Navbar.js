import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);

    return (
      <AuthContext.Consumer>
        {(AuthContext) => (
          <ThemeContext.Consumer>
            {(ThemeContext) => {
              const { isAuthenticated, toggleAuth } = AuthContext;
              const { isLightTheme, light, dark } = ThemeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Cibtext app</h1>
                  <div onClick={toggleAuth}>{isAuthenticated ? "Logged In" : "Logged Outr"}</div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
