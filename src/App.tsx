import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    console.log("mount")
  }, [])

  return (
    <div>test</div>
  )
}

export default App
