import React, {useState} from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

import 'bulma/css/bulma.min.css';
import 'animate.css'

const GifExpertApp = () => {
    const initialState = ['Gantz']
    const [categories, setCategories] = useState(initialState);

    return (
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            GifExpertApp
                        </h1>
                    </div>
                </div>
            </section>
            <section className="section">
                <AddCategory setCategories={setCategories} />
                <hr />
                <ol>
                    {
                        categories.map((category) => (
                            <GifGrid key={category} category={category} />
                        ))   
                    }
                </ol>
            </section>
        </>
    )
}

export default GifExpertApp;