import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import AddForm from './add_form';
import List from './list';
import listData from '../data/todo_items';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: listData
        }
    }

    deleteItem(index){

        // const newList = this.state.list.slice()

        const newList = [...this.state.list];

        newList.splice(index, 1);

        this.setState({
            list: newList
        });
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        });
    }

    render(){

        const iconStyle = {
            fontSize: '42px',
            verticalAlign: 'bottom'
        }

        return (
            <div className="container">
                <h1 className="center">T<i style={iconStyle} className="material-icons">check_circle</i> D<i style={iconStyle} className="material-icons">check_circle</i> List</h1>
                <AddForm add={this.addItem.bind(this)}/>
                <List list={this.state.list} delete={this.deleteItem.bind(this)}/>
            </div>
        )
    }
};

export default App;
