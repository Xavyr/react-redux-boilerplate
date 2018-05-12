import React, { Component } from 'react';
import ExampleComponent from '../components/exampleComponent.jsx';


class ExampleContainer extends Component {

  componentDidMount() {
    console.log('exampleContainer did mount');
  }

  render() {
    return (
      <div>
        <h1>Example Container Header</h1>
        <ExampleComponent/>
      </div>
    );
  }
}

export default ExampleContainer;