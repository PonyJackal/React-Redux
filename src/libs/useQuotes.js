import { useQuery } from 'react-query'

const fetchQuotes = () => fetch('http://localhost:8000/quotes')

const useQuotes = () => useQuery('fetchQuotes', fetchQuotes)

export default useQuotes
