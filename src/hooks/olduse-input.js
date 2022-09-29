import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredVlaue, setEnteredVlaue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredVlaue); // retrun true
  // To Check value When user not foucs input
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredVlaue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredVlaue("");
    setIsTouched(false);
  };

  return {
    value: enteredVlaue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
