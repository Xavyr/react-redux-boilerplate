import React, { Component } from 'react';
import ExampleComponent from '../components/exampleComponent.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'


const mapStateToProps = (store) => {
  return {
    store: store.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    synAction: actions.syncAction,
    asynAction: actions.asyncAction
  }, dispatch)
};


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

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);