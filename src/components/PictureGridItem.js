import React from 'react'

export const PictureGrid = ({name, url}) => {
    return (
        <div className="card animate__animated animate__zoomIn" >
            <img src={url} alt={name} />
            <p>{name}</p>
        </div>
    )
    
}
