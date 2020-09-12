import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="d-flex flex-column" style={{ background: "#1a202c" }}>
        <footer className="footer">
          <div style={{ color: "#fff" }}>
            <span>&copy; 2020 mazaoDirect.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
