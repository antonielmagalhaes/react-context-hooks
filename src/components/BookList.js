import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{ background: theme.ui, color: theme.syntax }}>
        <ul>
          <li style={{ background: theme.ui }}>Parasita</li>
          <li style={{ background: theme.ui }}>The prince of tides</li>
          <li style={{ background: theme.ui }}>Her</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
