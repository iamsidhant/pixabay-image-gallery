import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  return (
    <>
      <div className='container mx-auto'>
        <ImageSearch searchText ={(text) => setTerm(text)} />
        <ImageCard key={images.id} image={image}/>
      </div>
    </>
  )
}

export default App
