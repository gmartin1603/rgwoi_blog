import React from 'react';

function ListItem({obj}) {
    return (
        <li>
            <h4> {obj.title} </h4>
            <p>
                {obj.body}
            </p>
        </li>
    );
}

export default ListItem;