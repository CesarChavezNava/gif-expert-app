import React, {useState} from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

import 'bulma/css/bulma.min.css';

const GifExpertApp = () => {
    const initialState = ['Gantz']
    const [categories, setCategories] = useState(initialState);

    return (
        <>
            <section className="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
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