import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CardList from "./pages/CarList";
import useDogStore from "./store/useDogStore";
import { useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import obtenerListaDeRazas from "./services/fetchRaza";
import fetchRaza from "./services/fetchRaza";
function App() {
  const obtenerListaDeRazas = useDogStore((state) => state.dogs);
  useEffect(() => {
    fetchRaza();
  }, [fetchRaza]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card-list' element={<CardList/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
