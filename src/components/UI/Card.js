import React from 'react';

import './Card.css';

const Card = (props) => {
    const classes = `card ${props.className}`;

    return (
        <div className={classes} onClick={props.onClick || undefined}>
            {props.children}
        </div>
    );
};

export default Card;
