import React from 'react'
import useCreatePost from '../hooks/react-query/useCreatePost'

const CreatePost = () => {
  const mutation = useCreatePost()

  const errorOrConfirm = () => {
    if (mutation.isError) {
      return <p>{`Ошибка записи ${mutation.error}`}</p>
    }
    if (mutation.isSuccess) {
      return <p>Запись прошла успешно {JSON.stringify(mutation.data)}</p>
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
        Добавить пост
      </button>
      {errorOrConfirm()}
    </div>
  )
}

export default CreatePost
