import { useState, useEffect } from "react"
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
    const initialState = { data: [], loading: true };
    const [state, setState] = useState(initialState)

    useEffect(() => {
        getGifts(category).then( images => {
            setState({
                data: images,
                loading: false
            });
        });
    }, [category])

    return state;
}
