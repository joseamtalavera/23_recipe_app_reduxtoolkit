import React from 'react';

export const FavoriteButton =({children, onClickHandler, icon}) => {

    return (
        <button 
        className='favorite-button' 
        onClick={onClickHandler}>
                <img 
                className='heart-icon'
                alt=''
                src={icon}/>
                {children}
        </button>
    );
}