import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import { AppContext } from './context/contextApi'


const SearchResult = React.lazy(() => {
   return import('./components/SearchResult')
})

const VideoDetails = React.lazy(() => {
  return import('./components/VideoDetails');
})




function App() {


  return (
    <>
      <AppContext>
        <div className='flex flex-col h-full '>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />}/>
            <Route path='/searchResult/:searchQuery' element={ <Suspense> <SearchResult /> </Suspense> }/>
            <Route path='/video/:id' element={<Suspense> <VideoDetails /> </Suspense>}/>
          </Routes>
        </div>
      </AppContext>
    </>
  )
}

export default App
