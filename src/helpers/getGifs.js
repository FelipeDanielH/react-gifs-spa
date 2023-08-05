import axios from 'axios';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=38ZCounWHLKaHf2l03vUHP7dgedVvizJ&q=${category}&limit=10`;
    const resp = await axios.get(url)
    
    const {data} = resp.data;
    console.log(data)

    try {
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs
    } catch (error) {
        console.error('Error:', error);
        return [];
    }

}