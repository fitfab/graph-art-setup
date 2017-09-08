import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider
} from 'react-apollo';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from './data/schema';
import {mocks} from './data/channel-mock'


const schema = makeExecutableSchema({ typeDefs });

// setup mock data based on the schema
addMockFunctionsToSchema({ 
  schema, 
  mocks
});

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });


// 0) create the Apollo CLient
const client = new ApolloClient({
  networkInterface: mockNetworkInterface
});

// 1) list component
const ChannelList = ({ data: { loading, error, channels}}) => {

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return <ul>
    { channels.map( ch => <li key={ch.id}><b>{ch.name}</b> - {ch.topic} - ({ch.userCount})</li>)}
  </ul>
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
