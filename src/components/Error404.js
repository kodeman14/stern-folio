import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    let jsonData = this.props.jsonData;
    return (
      <div>
        <img
          src={jsonData.errors.notFound.imgLink}
          alt={jsonData.errors.notFound.errType}
          style={{
            width: 400,
            height: 400,
            display: "block",
            margin: "auto",
            position: "relative",
          }}
        />
        <center>
          <h1>{jsonData.errors.notFound.message}</h1>
          <Link to="/">Return to Home Page</Link>
        </center>
      </div>
    );
  }
}
