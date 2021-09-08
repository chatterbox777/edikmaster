import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as carsActionCreators from '../../store/actionCreators';

export default function Input({ placeHolder, name }) {
  const [hasInputFired, setHasInputFired] = useState(false);

  const dispatch = useDispatch();

  const timeOut = useRef<ReturnType<typeof setTimeout> | null>(null);
  /*eslint no-debugger: "warn"*/
  function handleInput(e) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      dispatch(
        carsActionCreators.setDataOfCar({
          name,
          value: e.target.value,
        }),
      );
    }, 300);
  }

  return (
    <div>
      <input onInput={handleInput} type={name === 'year' ? 'number' : 'text'} placeholder={placeHolder} />
    </div>
  );
}
