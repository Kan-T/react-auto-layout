import React, { Component } from 'react';

class DemoTitle extends Component {
  render() {
    const {name, message} = this.props
    return (
      <div className="item">
        <h1>{name}</h1>
        <p>{message}</p>
      </div>
    )
  }
}

export default DemoTitle