import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Experience } from './components/Experience'
import { Canvas } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas camera={{
      fov: 64,
      position: [2.3, 1.3, 2.3], 

    }}>
      <Experience/>
    </Canvas>
  )
}

export default App
