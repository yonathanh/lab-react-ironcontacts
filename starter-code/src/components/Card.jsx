import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>
          <img
            style={{ width: "50px" }}
            src={this.props.pictureUrl}
            alt="poster"
          />
        </td>
        <td>{this.props.name} </td>
        <td>{this.props.popularity}</td>
        <td>
          <button
            style={{ backgroundColor: "red" }}
            onClick={this.props.deleteClickHandler}
          >
            Delete
          </button>{" "}
        </td>
      </tr>
    );
  }
}

export default Card;
