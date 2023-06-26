import { useState, useEffect } from "react";
import { fetchRandomQuote } from "../service/api";
import './style.css';

export const QuoteMachine = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchQuote = async (): Promise<any> => {
        try {
            const data = await fetchRandomQuote();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    const tweetQuote = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
        )}`;
        window.open(twitterUrl, '_blank');
    };

    const renderContent = () => {
        if (isLoading) {
            return <div>Loading...</div>;
        } else if (quote && author) {
            return (
                <>
                    <div className="container">
                        <div id="text">{quote}</div>
                        <div id="author">- {author}</div>
                    </div>
                    <div className="buttons">
                        <button id="new-quote" onClick={fetchQuote}>
                            New Quote
                        </button>
                        <a id="tweet-quote" href="#" onClick={tweetQuote}>
                            Tweet Quote
                        </a>
                    </div>
                </>
            );
        } else {
            return <div>No quote available.</div>;
        }
    };

    return (
        <div id="quote-box">
            {renderContent()}
        </div>
    )
}