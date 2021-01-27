import React from 'react';
import useFetch from '../libs/useFetch';

const Quote = () => {
    const { data, error, loading } = useFetch('https://quotes.rest/qod?language=en');

    if (error) {
        return `Error: ${error}`;
    }

    if (loading) {
        return <h3>Loading ...</h3>
    }

    if (data) {
        // return <h2>{data.contents.quotes[0].quote} {data.contents.quotes[0].author}</h2>
        return <h2>Be a Victor, not a Victicm</h2>
    }

}

export default Quote;