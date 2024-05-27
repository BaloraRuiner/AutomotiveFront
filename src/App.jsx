import './App.css';
import CarsList from "./pages/carsList.jsx";
import Filter from "./pages/filter.jsx";
import {useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from "./pages/create.jsx";

function App() {
  const [cars, setCars] = useState([]);
  console.log(cars);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/getCars' element={
          <div style={{padding: '20px'}}>
          <Filter setCars={setCars}/>
          <CarsList cars={cars}/>
          </div>
        }/>
        <Route path='/getDetails' element={
          <div style={{padding: '20px'}}>
            <Filter setCars={setCars}/>
            <CarsList cars={cars}/>
          </div>
        }/>
        <Route path='/create' element={
          <div style={{padding: '20px'}}>
            <Create/>
          </div>
        }/>
        <Route path='/' element={
          <div style={{padding: '20px'}}>
            <p>Извините, но тут пусто :(</p>
            <p>404</p>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
