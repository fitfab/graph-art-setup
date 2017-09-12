import React from 'react';

import {
  gql,
  graphql
} from 'react-apollo';

import AddChannel from './add-channel';

import './channel-list.css';

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
            { channels.map( ch => (
                <li key={ch.id} className={(ch.id < 0 ? 'optimistic': '')}>
                    <b>{ch.name}</b> - {ch.topic} - [{ch.userCount}]
                </li>
            ))}
          </ul>
      </div>
  )
}

// 2) query for the component and set to be export it in case need somewhere else.
export const channelListQuery = gql`
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
export default graphql(channelListQuery, {
    options: { pollInterval: 5000}
})(ChannelList)
