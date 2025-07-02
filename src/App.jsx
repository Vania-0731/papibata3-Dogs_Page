import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CarList from "./pages/CarList";
import ContactPage from "./pages/ContactPage";
import useDogStore from "./store/useDogStore";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import fetchBreeds from "./services/fetchBreeds";
import fetchImageByBreeds from "./services/fetchImageByBreeds";

function App() {
  const setDogs = useDogStore((state) => state.setDogs);

  useEffect(() => {
    const cargarPerros = async () => {
      const breeds = await fetchBreeds();

      const dogsConImagenes = await Promise.all(
        breeds.map(async (breed) => {
          const image = await fetchImageByBreeds(breed);
          return { breed, image };
        })
      );

      setDogs(dogsConImagenes);
    };

    cargarPerros();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-list" element={<CarList />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
