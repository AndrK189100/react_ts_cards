import './App.css'
import Card from './components/card/card'
import ImageCap from './components/imagecap/imagecap'

function App() {
  const txt = "Some quick example text to build on the card title and make up the bulk of the card's content."
  return (
    <>
      <Card title='Card title' text={txt}>
      <ImageCap/>
      </Card>
      
    </>
  )
}
export default App
