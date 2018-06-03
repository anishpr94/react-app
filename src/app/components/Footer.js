import React from "react";

export const Footer = (props) => {
    return (
      <nav  className="footer fixed-bottom mnavbar containernavbar navbar-expand-sm bg-light">
        <div className="container">
          <div className="navbar-header">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"> {props.footerItems}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}