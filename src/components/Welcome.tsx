import { useEffect } from "react"

const Welcome = () => {
  useEffect(() => {
    console.log('I am from Welcome component')
  }, [])

  return (
    <div>Welcome</div>
  )
}

export default Welcome