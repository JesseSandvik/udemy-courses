import React from 'react';

function CreateList( {items, classNameTitle, classNameItem } ) {
    return (
        <ul className={classNameTitle}>
            {items.map((item, index) => (
                <div  key={index}>
                <li className={classNameItem}>{item}</li>
                <br />
                </div>
            ))}
        </ul>
    );
}

export default CreateList;