import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeatherDashboard from './components/WeatherDashboard'
import Intro from './components/Intro'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={"/weather"} element={<WeatherDashboard/>}/>

        <Route path={"/"} element={<Intro/>}/>
     
      </Routes>
      </BrowserRouter>

    
    
    </>
  )
}

export default App
