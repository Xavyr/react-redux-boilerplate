import React, { Component } from 'react';
import ExampleComponent from '../components/exampleComponent.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'


const mapStateToProps = (store) => {
  return {
    syncData: store.firstReducer.syncData,
    asyncData: store.firstReducer.asyncData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    syncAction: actions.syncAction,
    asyncAction: actions.asyncAction
  }, dispatch)
};


class ExampleContainer extends Component {

  componentDidMount() {
    console.log('exampleContainer did mount');
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Example Container Header</h1>
        <ExampleComponent
          syncAction={this.props.syncAction}
          syncData={this.props.syncData}
          asyncAction={this.props.asyncAction}
          asyncData={this.props.asyncData}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);