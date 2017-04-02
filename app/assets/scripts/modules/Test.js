import React, { Component } from 'react';
import logo from './logo.svg';

class Test extends Component {
  constructor() {
    super();

    this.state = {
      header: "Header from props...",
      content: "Aanpasbare content via this.state"
    }
  }

  render() {
    return (
      <div className="test">
        <Header headerProp = {this.state.header}/>
        <Content contentProp = {this.state.content}/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}

export default Test;