import React from 'react';

class Welcome extends React.Component {
  render() {
    console.log('this ', this);
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;