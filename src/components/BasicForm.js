import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enterdFirstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameinputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: enterdLastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameinputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: enterdEmail,
    valueIsValid: emailIsValid,
    hasError: emailinputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput((value) => value.includes("@"));

  let formInvalid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) formInvalid = true;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formInvalid) return;

    resetFirstName();
    resetLastName();
    resetemail();
  };

  const firstNameInputInvaidClasses = firstNameinputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputInvaidClasses = lastNameinputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputInvaidClasses = emailinputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameInputInvaidClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enterdFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameinputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputInvaidClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enterdLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameinputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputInvaidClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enterdEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailinputHasError && (
          <p className="error-text">Please Enter Invalid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
