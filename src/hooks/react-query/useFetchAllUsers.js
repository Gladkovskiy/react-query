import {useQuery} from 'react-query'
import {getAll} from '../api/users'

const useFetchAllUsers = () => {
  const query = useQuery('allUsers', getAll)
  return query
}

export default useFetchAllUsers
