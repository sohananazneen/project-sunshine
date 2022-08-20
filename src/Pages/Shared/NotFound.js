import React from 'react';
import NotFoundImage from '../../Images/NotFoundImage.png';

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={NotFoundImage} alt="" />
        </div>
    );
};

export default NotFound;