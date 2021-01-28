import React from 'react'
import useFetch from '../libs/useFetch'

const Quote = () => {
  const { data, error, loading } = useFetch('http://localhost:8000/quotes')

  if (error) {
    return `Error: ${error}`
  }

  if (loading) {
    return <h3>Loading ...</h3>
  }

  return (
    <h2>
      {data.quotes[0].quote} {data.quotes[0].author}
    </h2>
  )
}

export default Quote
