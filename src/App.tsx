import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import TodoItem from './components/TodoItem'

type Todo = {
  id: number,
  todo: string,
  completed: boolean
}

type Product = {
  id: number,
  title: string,
  description: string
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const divRef = useRef<HTMLDivElement>(null)

  const fetchTodos = async () => {
    const response = await fetch('https://dummyjson.com/todos')
    const data = await response.json()
    setTodos(data.todos) // this will store the todos into the todos state
  }

  useEffect(() => {
    console.log('fetchTodos and fetchProducts useEffect....')
    fetchTodos()
    fetchProducts()
  }, []) // this will only trigger on render (once)

  useEffect(() => {
    console.log('Mode toggled.....')
  }, [isDarkMode])

  useLayoutEffect(() => {
    console.log('I AM USELAYOUT EFFECT')
    if (divRef.current) {
      divRef.current.style.width = '100vw'
    }
  }, [])

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products) // this will store the todos into the todos state
  }

  const onToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div ref={divRef} style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
      <button onClick={onToggle}>Toggle Mode</button>
      <ul>
        {todos.map(todoItem => (
          <TodoItem key={todoItem.id} id={todoItem.id} todo={todoItem.todo} completed={todoItem.completed} mode={isDarkMode} />
        ))}
      </ul>
      <hr />
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App