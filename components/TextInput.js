import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: 'Tahmid Tanzim'
        }
    }

    handelChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <TextDisplay text={this.state.inputText}/>
                <input type="text"
                       placeholder="Search ..."
                       value={this.state.inputText}
                       onChange={this.handelChange.bind(this)}/>
            </div>
        );
    }
}


export default TextInput;