import {useQuery} from 'react-query'
import {getOne} from '../api/users'
import {useQueryClient} from 'react-query'

const useFetchOneUser = id => {
  const client = useQueryClient()

  const query = useQuery(['oneUser', id], () => getOne(id), {
    placeholderData() {
      //подставляет пока грузится, если есть в кэше значение а если нет то псевдоданные
      //перебивает isloading
      const user = client.getQueryData('oneUser')?.find(user => user.id === id)
      return (
        user ?? {
          userId: 'загрузка',
          id: 'загрузка',
          title: 'загрузка',
          body: 'загрузка',
        }
      )
    },
    onError() {
      //можно делать редирект
    },
    retry: 3,
    retryDelay: 2000,
  })
  return query
}

export default useFetchOneUser
