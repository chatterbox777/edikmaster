import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as carsActionCreators from '../../store/actionCreators';

export default function Input({ placeHolder, name }) {
  const [hasInputFired, setHasInputFired] = useState(false);

  const dispatch = useDispatch();

  const timeOut = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleInput(e) {
    if (hasInputFired) {
      return;
    }

    if (e.target.value.length >= 5) {
      clearTimeout(timeOut.current);

      timeOut.current = setTimeout(() => {
        dispatch(
          carsActionCreators.setDataOfCar({
            [name]: e.target.value,
          }),
        );

        setHasInputFired(true);
      }, 300);
    }
  }

  return (
    <div>
      <input onInput={handleInput} type={name === 'year' ? 'number' : 'text'} placeholder={placeHolder} />
    </div>
  );
}
