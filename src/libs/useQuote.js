import { useQuery } from 'react-query'

const fetchQuote = async () => {
  const quotes = await fetch('http://localhost:8000/quotes')
  return quotes
}

const useQuote = () => useQuery('fetchQuote', fetchQuote)

export default useQuote
