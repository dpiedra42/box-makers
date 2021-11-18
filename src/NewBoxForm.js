import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state={
            height: "",
            width: "",
            color: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const newBox = {...this.state, id: Math.random() * 10000}
        this.props.createBox(newBox);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='height'>Height:</label>
                        <input 
                            type='text' 
                            name='height' 
                            value={this.state.height}
                            onChange={this.handleChange}
                            id='height'
                        />
                    </div>
                    <div>
                        <label htmlFor='width'>Width:</label>
                        <input 
                            type='text' 
                            name='width' 
                            value={this.state.width}
                            onChange={this.handleChange}
                            id='width'
                        />
                    </div>
                    <div>
                        <label htmlFor='color'>Color:</label>
                        <input 
                            type='text' 
                            name='color' 
                            value={this.state.color}
                            onChange={this.handleChange}
                            id='color'
                        />
                    </div>
                    <button>Make my Box!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;