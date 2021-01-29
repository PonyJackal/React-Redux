import { useQuery } from 'react-query'
import { ApiClient } from '../ApiClient'

const fetchQuotes = () =>
  ApiClient()
    .get('quotes')
    .then((res) => res.data)

const useQuotes = () => useQuery('fetchQuotes', fetchQuotes)

export default useQuotes
