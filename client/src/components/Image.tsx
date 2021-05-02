import React from 'react'

const Image = (props: {image: any}) => {
    return (
        <img className="single-photo"
            src={props.image.urls.thumb}
            alt=""
        />
    )
}

export default Image
