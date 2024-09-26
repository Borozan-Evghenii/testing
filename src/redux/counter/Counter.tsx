import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/reducers/counterReducer";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue";

export const Counter = () => {
  const dispach = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispach(increment());
  };
  const onDecrement = () => {
    dispach(decrement());
  };

  return (
    <div>
      <h1 data-testid="value">{value}</h1>
      <button onClick={onIncrement} data-testid="increment">
        Increment
      </button>
      <button onClick={onDecrement} data-testid="decrement">
        Decrement
      </button>
    </div>
  );
};
