import classes from './Cars.module.css';

interface CarsProps {
  dataCars: [
    {
      id: number;
      maker: string;
      model: string;
      year: number;
      vin: string;
      country: string;
    },
  ];
}

export default function Cars({ dataCars }: CarsProps) {
  return (
    <div className={classes.result}>
      {dataCars.length > 0 ? (
        dataCars.map(car => (
          <li key={car.id}>
            {car.maker} {car.model}{' '}
          </li>
        ))
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
}
