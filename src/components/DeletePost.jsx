import React from 'react'
import useDeletePost from '../hooks/react-query/useCreatePost'

const DeletePost = () => {
  const mutation = useDeletePost()

  const errorOrConfirm = () => {
    if (mutation.isError) {
      return <p>{`Ошибка записи ${mutation.error}`}</p>
    }
    if (mutation.isSuccess) {
      return <p>Удаление прошла успешно {JSON.stringify(mutation.data)}</p>
    }
    return null
  }

  return (
    <div>
      <button onClick={() => mutation.mutate(2)} disabled={mutation.isLoading}>
        Удалить пост
      </button>
      {errorOrConfirm()}
    </div>
  )
}

export default DeletePost
