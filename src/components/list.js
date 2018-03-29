import React from 'react';
import ListItem from './list_item';

export default props => {

    if(!props.list.length){
        return <h2 className="center">No To Do Items</h2>
    }

    const listElements = props.list.map((item, index) => {
        return <ListItem key={index} item={item} del={() => props.delete(index)}/>
    });


    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
}
