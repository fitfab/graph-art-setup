import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface, // <-- this line is new!
} from 'react-apollo';

import ChannelListWithData from './channel/channel-list-with-data'

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
});

// 0) create the Apollo CLient
const client = new ApolloClient({
  networkInterface
});

// The App
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Falcon | Graphql & React + ?</h2>
        </div>
        <ChannelListWithData />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
