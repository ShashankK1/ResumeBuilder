import React from 'react';
import './Category.css';

const Category = (props) => {

    return (
        <div className='category'>
            
            <strong>{props.title}</strong>
            <div>
                {props.content}
            </div>
        </div>
    )
}

export default Category