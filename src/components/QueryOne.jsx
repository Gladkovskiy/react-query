import React from 'react'
import useFetchOneUser from '../hooks/react-query/useFetchOneUser'

const QueryOne = () => {
  const id = 29
  const user = useFetchOneUser(id)

  if (user.isLoading) {
    return <div>Loading...</div>
  }

  if (user.isError) {
    return <div>Error...</div>
  }

  return <pre>{JSON.stringify(user.data, null, 2)}</pre>
}

export default QueryOne
