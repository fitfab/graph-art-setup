import React from 'react';
import { gql, graphql } from 'react-apollo';
import { channelListQuery } from './channel-list-with-data'

import './add-channel.css';

const AddChannel = ({mutate}) => {
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {

            mutate({
                variables: {name: e.target.value},
                optimisticResponse: {
                  addChannel: {
                    name: e.target.value,
                    topic: 'Pending...',
                    id: Math.round(Math.random() * -1000000),
                    userCount: 0,
                    __typename: 'Channel',
                  },
                },

            });

            e.target.value ='';

        }
    };

    return (
        <div className="add-channel">
            <input
                type="text"
                placeholder="Add New Channel"
                onKeyUp={handleKeyUp}
            />
        </div>
    )
}

const addChannelMutation = gql`
    mutation addChannel($name: String!) {
        addChannel(name: $name) {
          id
          name
          topic
          userCount
        }
    }
`;

const AddChannelWithMutation = graphql(addChannelMutation, {
    options: {
        update: (proxy, { data: { addChannel } }) => {
            // Read the data from the cache for this query.
            const data = proxy.readQuery({query: channelListQuery });
            // Add our channel from the mutation to the end.
            data.channels.push(addChannel);
            // Write the data back to the cache.
            proxy.writeQuery({ query: channelListQuery, data });
        },
    }
})(AddChannel);

export default AddChannelWithMutation;
