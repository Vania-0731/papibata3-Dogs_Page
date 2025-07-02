const Card = ({ dog }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={dog.image} className="card-img-top" alt={dog.breed} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{dog.breed}</h5>
        <p className="card-text">
          Esta es una raza de perro llamada {dog.breed}.
        </p>
      </div>
    </div>
  );
};

export default Card;
