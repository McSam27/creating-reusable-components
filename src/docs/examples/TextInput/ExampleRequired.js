import React from 'react';
import TextInput from 'ee-kitchen-sink/TextInput';

/** Optional TextBox */
export default class ExampleRequired extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="example-required"
                label="Email"
                name="email"
                onChange={()=>{console.log('Put your awesome onChange function here!')}}
                required
                error="Email is required."
            />
        )
    }
}