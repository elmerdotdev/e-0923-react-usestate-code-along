import { useEffect } from 'react'

type Props = {
  id: number,
  todo: string,
  completed: boolean,
  mode: boolean
}

const TodoItem = ({ id, todo, completed, mode }: Props) => {
  useEffect(() => {
    console.log('todoItem useEffect....')
  }, [mode])

  return (
    <li>
      <span>{id} - </span>
      <span>{todo} - </span>
      <span>{completed ? 'Completed' : 'Not completed'}</span>
    </li>
  )
}

export default TodoItem