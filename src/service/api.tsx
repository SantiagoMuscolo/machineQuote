import axios from 'axios';

const API_ULR = 'https://api.quotable.io/random';

export const fetchRandomQuote = async () => {
    try{
        const response = await axios.get(API_ULR);
        return response.data;
    }catch(error){
        throw new Error('Failed to fetch random quote')
    }
}