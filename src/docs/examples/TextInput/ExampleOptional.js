import React from 'react';
import TextInput from 'ee-kitchen-sink/TextInput';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={()=>{console.log('Put your awesome onChange function here!')}}
            />
        )
    }
}