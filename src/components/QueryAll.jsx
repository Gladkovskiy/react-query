import React from 'react'
import useFetchAllUsers from '../hooks/react-query/useFetchAllUsers'

const QueryAll = () => {
  const users = useFetchAllUsers()

  if (users.isLoading) {
    return <div>Loading...</div>
  }

  if (users.isError) {
    return <div>Error...</div>
  }

  return (
    <div style={{width: 1000, margin: '0 auto'}}>
      <ul>
        {users.data.map((item, index) => (
          <li key={index}>{item.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default QueryAll
