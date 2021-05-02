import React from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react';
import { useEffect } from 'react';
import Image from "./Image"

const Images = () => {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(30);
    const [start, setStart] = useState(1);

    useEffect(()=>{
        axios
            .get(`/api/photos?count=${count}&start=${start}`)
            .then(res => setImages(res.data.response.results));
    },[])

    const fetchImages = () => {
        setStart(start+count);

        axios
            .get(`/api/photos?count=${count}&start=${start}`)
            .then(res => setImages(images.concat(res.data.response.results)));
    } 

    return (
        <div className="images">
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {
                    images.map((image: any) => (
                        <Image key={image.id} 
                        image={image}
                        />
                    ))
                }
            </InfiniteScroll>
        </div>
    )
}

export default Images
