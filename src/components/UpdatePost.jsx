import React from 'react'
import useUpdatePost from '../hooks/react-query/useUpdatePost'

const UpdatePost = () => {
  const mutation = useUpdatePost()

  const errorOrConfirm = () => {
    if (mutation.isError) {
      return <p>{`Ошибка записи ${mutation.error}`}</p>
    }
    if (mutation.isSuccess) {
      return <p>Обновление прошла успешно {JSON.stringify(mutation.data)}</p>
    }
    return null
  }

  return (
    <div>
      <button
        onClick={() =>
          mutation.mutate({
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
        }
        disabled={mutation.isLoading}
      >
        Обновить пост
      </button>
      {errorOrConfirm()}
    </div>
  )
}

export default UpdatePost
