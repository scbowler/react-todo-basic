import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        }

    }

    handleAddItem(e){
        e.preventDefault();

        console.log('New item to add:', this.state);

        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }


    render(){
        const { title, details } = this.state;

        return (
            <form className="row" onSubmit={this.handleAddItem.bind(this)}>
                <div className="col s6">
                    <label>Title</label>
                    <input type="text" value={title} onChange={ e => this.setState({title: e.target.value})}/>
                </div>
                <div className="col s6">
                    <label>Details</label>
                    <input type="text" value={details} onChange={e => this.setState({ details: e.target.value })}/>
                </div>
                <div className="center">
                    <button className="btn-large btn-floating green darken-3"><i className="material-icons">add</i></button>
                </div>
            </form>
        )
    }
}

export default AddForm;
