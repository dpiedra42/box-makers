import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.createBox = this.createBox.bind(this);
    }
    
    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    }
    createBox(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                width={box.width} 
                height={box.height} 
                color={box.color} 
                key={box.id}
                id={box.id}
                removeBox={() => this.remove(box.id)}
            />
        ))
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.createBox}/>
                {boxes}
            </div>
        )
    };
}

export default BoxList;