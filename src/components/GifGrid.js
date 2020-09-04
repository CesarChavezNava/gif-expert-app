import React from 'react'
import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className="container is-fluid">
            { loading && <progress className="progress is-small is-primary" max="100">15%</progress> }
           <h3 className="subtitle">{category}</h3> 
           <div className="columns">
               {
                   images.map((image) => (
                    <GifGridItem key={image.id} {...image} />
                   ))
               }
           </div>
        </div>
    )
}

GifGrid.prototype = {
    category: PropTypes.string.isRequired
}