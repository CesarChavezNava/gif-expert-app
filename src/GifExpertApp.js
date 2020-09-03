import React, {useState} from 'react';

import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
    const initialState = ['Dragon Ball', 'Samurai X', 'Gantz']
    const [categories, setCategories] = useState(initialState);

    /*
    const handleAdd = () => {
        setCategories([...categories, 'Another']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                  categories.map((category) => <li key={category}>{category}</li>)   
                }
            </ol>
        </>
    )
}

export default GifExpertApp;