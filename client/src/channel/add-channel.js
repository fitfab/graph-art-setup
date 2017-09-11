import React from 'react';
import { gql, graphql } from 'react-apollo';


import './add-channel.css';

const AddChannel = ({mutate}) => {
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            // If you want to access the event properties in an asynchronous way,
            // you should call event.persist() on the event, which will remove
            // the synthetic event from the pool and allow references
            // to the event to be retained by user code.
            e.persist();
            mutate({
                variables: {name: e.target.value}
            })
            .then( res => {
                e.target.value ='';
            })
        }
    }

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
        }
    }
`;

const AddChannelWithMutation = graphql(addChannelMutation)(AddChannel);

export default AddChannelWithMutation;
