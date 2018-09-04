import React from 'react';

const DumbComponent = props =>
  <div>
    <button onClick={() => props.syncAction(props.syncData)}>SyncAction</button>
    <button
      style={{ display: 'inline', float: 'right' }}
      onClick={() => props.asyncAction(props.asyncData)}>AsyncAction
    </button>
    <br />
    <h1 style={{ display: 'inline', float: 'left' }}>{JSON.stringify(props.syncData)}</h1>
    <h1 style={{ display: 'inline', float: 'right' }}>{JSON.stringify(props.asyncData)}</h1>
  </div>


export default DumbComponent;