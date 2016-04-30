import React, { Component } from 'react';

class TextDisplay extends Component {

    render() {
        return (
            <div>
                Hello World: {this.props.text}
            </div>
        );
    }
}

export default TextDisplay;