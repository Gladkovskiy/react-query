import axios from 'axios'
import {delay} from '../../utils/delay'

//обычный Get запрос всего
export const getAll = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return data
}

//запрос одного usera
export const getOne = async id => {
  const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  await delay()
  return data
}

//запись поста POST-запрос
export const createPost = async post => {
  const {data} = await axios.post(
    `https://jsonplaceholder.typicode.com/posts`,
    post
  )
  await delay()
  return data
}

//удаление поста
export const deletePost = async id => {
  const {data} = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  await delay()
  return data
}

//изменение поста
export const updatePost = async info => {
  const {data} = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/1`,
    info
  )
  await delay()
  return data
}
