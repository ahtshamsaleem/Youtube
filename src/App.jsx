import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import { AppContext } from './context/contextApi'



function App() {


 
  //console.log(import.meta.env.VITE_YOUTUBE_API_KEY)

  return (
    <>
    {/* <div className='h-3 bg-black text-3xl'>I AM AHTSHAM</div> */}
      <AppContext>
        <div className='flex flex-col h-full '>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />}/>
            <Route path='/searchResult/:searchQuery' element={<SearchResult />}/>
            <Route path='/video/:id' element={<VideoDetails />}/>
          </Routes>
        </div>
      </AppContext>
    </>
  )
}

export default App
