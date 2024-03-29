import React, { Component } from "react";
import NavMenu from "../new/NavMenu";

export default class Header extends Component {
  render() {
    let jsonData = this.props.jsonData;
    let allSite = this.props.allSite;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show menu">
              Show menu
            </a>
            <a className="mobile-btn" href="/#" title="Hide menu">
              Hide menu
            </a>
            <NavMenu allSite={allSite}></NavMenu>
          </nav>

          {/* <h1
						className='responsive-headline'
						style={{ color: 'red', fontFamily: 'sans-serif ' }}>
						{jsonData.name}
					</h1> */}

          <div className="row banner">
            <div className="banner-text">
              <div className="typewriter">
                <h2>
                  <span className="rainbow">{jsonData.headerJob}</span>
                </h2>
              </div>
              <h3 style={{ color: "black" }}>{jsonData.roleDescription}</h3>
              <hr />
            </div>
            <ul className="social">
              {jsonData.socialMedia &&
                jsonData.socialMedia.map((item, i) => {
                  return (
                    <li key={i}>
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i key={i} className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
