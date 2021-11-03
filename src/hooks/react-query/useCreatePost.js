import {useMutation, useQueryClient} from 'react-query'
import {createPost} from '../api/users'

const useCreatePost = () => {
  const client = useQueryClient()
  const mutate = useMutation(createPost, {
    onMutate(vars) {
      //   console.log('onMutate:', vars)
    },
    onError(error, vars, context) {
      //   console.log('onError:', error, vars, context)
    },
    onSuccess(data, vars, context) {
      //обновление get запроса
      client.invalidateQueries('allUsers')
      //   console.log('onSuccess:', data, vars, context)
    },
    onSettled(data, error, vars, context) {
      //   console.log('onSettled:', data, error, vars, context)
    },
  })
  return mutate
}

export default useCreatePost
