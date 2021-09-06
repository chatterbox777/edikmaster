import Input from '../../Shared/Input/Input';
import Select from '../../Shared/Select/Select';
import classes from './Filter.module.css';

const inputs = [
  { id: 'yearOfCar', placeHolder: 'год выпуска' },
  { id: 'vinOfCar', placeHolder: 'vin автомобиля' },
];

const selectors = [
  { labelId: 'maker_selector', labelText: 'Выберите марку авто' },
  { labelId: 'model_selector', labelText: 'Выберите модель авто' },
  { labelId: 'country_selector', labelText: 'Выберите страну авто' },
];

interface FilterProps {
  carsList: [
    {
      brand: string;
      models: [string];
    },
  ];
  countries: [
    {
      name: string;
      code: string;
    },
  ];
}

export default function Filter({ carsList, countries }: FilterProps) {
  return (
    <div className={classes.filter}>
      {inputs.map(input => (
        <Input placeHolder={input.placeHolder} name={input.id} key={input.id} />
      ))}

      {selectors.map(selector => (
        <Select
          key={selector.labelId}
          labelId={selector.labelId}
          labelText={selector.labelText}
          carsList={carsList}
          countries={countries}
        />
      ))}
    </div>
  );
}
