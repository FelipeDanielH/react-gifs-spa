import { useState, useEffect } from 'react';
import { GetGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages =
        async () => {
            const newImages = await GetGifs(category);
            setimages(newImages);
            setIsLoading(false);
        }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
