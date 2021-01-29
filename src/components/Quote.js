import React from 'react'
import useQuotes from '../libs/useQuotes'

const Quote = () => {
  const { data, error, isLoading } = useQuotes()
  const index = Math.floor(Math.random() * Math.floor(1643))

  if (isLoading) return <h3>Loading ...</h3>

  if (error) return `Error: ${error.message}`

  console.log('data', data)

  return (
    <h2>
      {data[index].text} {data[index].author}
    </h2>
  )
}

export default Quote
