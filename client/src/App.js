import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  ApolloClient,
  gql,
  graphql,
  ApolloProvider
} from 'react-apollo';

// 0) create the Apollo CLient
const client = new ApolloClient();

// 1) list component
const ChannelList = ({ data: { loading, error, channels}}) => {

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return <ul>
    { channels.map( ch => <li key={ch.id}>{ch.name}</li>)}
  </ul>
}


// 2) query for the component
const channelListQuery = gql`
  query ChannelListQuery {
    channels {
      id
      name
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
