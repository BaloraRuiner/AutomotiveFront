import CarCard from "./carCard.jsx";

const CarsList = ({cars}) => {
  return (
    <div style={{
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      padding: '30px'
      }}
    >
    {
      cars.map((car) => {
        const {photoUrl, brand, price, id} = car;

        return (
          <CarCard
            src={photoUrl}
            name={brand}
            cost={price}
            key={id} // carInstanceId
          />
        )
      })
    }
    </div>
  );
};


export default CarsList;