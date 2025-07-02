const fetchImageByBreed = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    return data.message; // La URL de la imagen
}

export default fetchImageByBreed;
