import Header from './components/Header.tsx/Header'
import Article from './components/Article/Article'
import Aside from './components/Aside/Aside'
import './App.css'

function App() {


  return (
    <>
    <Header />
    <div className='main'>
      <Article></Article>
      <Aside></Aside>
    </div>
    </>
  )
}

export default App
