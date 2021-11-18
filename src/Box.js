import React, { Component} from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div className="Box">
                <div
                    style={{
                        height: `${this.props.height}em`,
                        width: `${this.props.width}em`,
                        backgroundColor: this.props.color
                    }}>
                </div>
                <button onClick={this.props.removeBox}>Delete this Box</button>
            </div>
        )
    }
}

export default Box;