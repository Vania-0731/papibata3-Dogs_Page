import useDogStore from "../store/useDogStore";
import fetchBreeds from "../services/fetchBreeds,jsx";
function CardList() {
    const { dogs } = useDogStore();

    return (
        <div className="grid grid-cols-3 gap-4">
            {dogs.map((dog) => (
                <div key={dog.breed} className="border p-4 rounded">
                    <h2 className="text-lg font-bold capitalize">{dog.breed}</h2>
                    <img src={dog.image} alt={dog.breed} className="w-full h-48 object-cover mt-2" />
                </div>
            ))}
        </div>
    );
}

export default CardList;
