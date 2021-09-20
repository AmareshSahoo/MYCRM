import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Created by &copy;{" "}
        <a
          href="https://www.skaffolder.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Skaffolder
        </a>
      </div>
    );
  }
}

export default Footer;
