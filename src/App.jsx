import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import {useSelector} from 'react-redux';
import './App.css'
import { LoadingScreen, NavBar, ProtectedRoutes } from './components'
import { Favorites, Home, Login, NewsDetail } from './pages'
import {Container} from 'react-bootstrap'


function App() {
  const isloading=useSelector(state=>state.isloading)

  return (
   <HashRouter>
    <NavBar/>
    {isloading && <LoadingScreen/>}
    <Container>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/news/:id" element={<NewsDetail/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route element={<ProtectedRoutes/>}> 
        <Route path="/favorites" element={<Favorites/>}/>   
      </Route>
      
    </Routes>
    </Container>
    
   </HashRouter>
  )
}

export default App
