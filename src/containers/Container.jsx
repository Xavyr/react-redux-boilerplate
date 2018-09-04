import React, { Component } from 'react';
import DumbComponent from '../components/DumbComponent.jsx';
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


class Container extends Component {

  componentDidMount() {
    console.log('exampleContainer did mount');
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Container</h1>
        <DumbComponent
          syncAction={this.props.syncAction}
          syncData={this.props.syncData}
          asyncAction={this.props.asyncAction}
          asyncData={this.props.asyncData}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);