import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface, // <-- this line is new!
} from 'react-apollo';

import AddChannel from './channel/add-channel'


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
});

// 0) create the Apollo CLient
const client = new ApolloClient({
  networkInterface
});

// 1) list component
const ChannelList = ({ data: { loading, error, channels}}) => {

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
      <div>
          <AddChannel />
          <ul>
            { channels.map( ch => <li key={ch.id}><b>{ch.name}</b> - {ch.topic} - ({ch.userCount})</li>)}
          </ul>
      </div>
  )
}


// 2) query for the component
const channelListQuery = gql`
  query channels {
    channels {
      id
      name
      topic
      userCount
    }
  }
`

// 3) Decorate/Connect the list component with data
const ChannelListWithData = graphql(channelListQuery)(ChannelList)


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
