import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import CreatePost from './components/CreatePost'
import DeletePost from './components/DeletePost'
import QueryAll from './components/QueryAll'
import QueryOne from './components/QueryOne'
import UpdatePost from './components/UpdatePost'

//объявляем хранилище
const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <CreatePost />
      <DeletePost />
      <UpdatePost />
      <QueryOne />
      <QueryAll />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
