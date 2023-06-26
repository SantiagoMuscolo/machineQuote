import axios from 'axios';

interface Quote {
    content: string;
    author: string;
}

const API_ULR = 'https://api.quotable.io/random';

export const fetchRandomQuote = async (): Promise<Quote> => {
    try{
        const response = await axios.get(API_ULR);
        return response.data;
    }catch(error){
        throw new Error('Failed to fetch random quote')
    }
}