import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state={
            height: "",
            width: "",
            color: "",
            id: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increaseId = this.increaseId.bind(this);
    }

    increaseId() {

        const prevId = this.state.id;

        this.setState({
            ...this.state,
            id: prevId + 1
        })
    }
  
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const newBox = {...this.state};
        this.increaseId();
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