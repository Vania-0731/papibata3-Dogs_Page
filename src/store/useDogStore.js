import { useState, useEffect } from "react";
import fetchBreeds from "../services/fetchBreeds";
import fetchImageByBreed from "../services/fetchImageByBreeds";

const useDogStore = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const getDogs = async () => {
            const breeds = await fetchBreeds();

            const dogsWithImages = await Promise.all(
                breeds.map(async (breed) => {
                    const image = await fetchImageByBreed(breed);
                    return { breed, image };
                })
            );

            setDogs(dogsWithImages);
        };

        getDogs();
    }, []);

    return { dogs };
};

export default useDogStore;
