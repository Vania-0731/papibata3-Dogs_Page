import useDogStore from "../store/useDogStore";
import { useState } from "react";
import Card from "../components/Card";

const CarList = () => {
  const { dogs } = useDogStore();
  const [search, setSearch] = useState("");

  const buscar = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? dogs
    : dogs.filter((dog) =>
        dog.breed.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="container mx-auto px-4">
      <div className="my-4">
        <input
          className="border p-2 w-full"
          type="search"
          placeholder="Buscar raza..."
          value={search}
          onChange={buscar}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((dog) => (
          <Card key={dog.breed} dog={dog} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
