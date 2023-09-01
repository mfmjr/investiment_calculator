import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlyContribution, setYearlyContribution] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [duration, setDuration] = useState(10);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration
    );
  };

  const resetHandler = () => {
    setCurrentSavings(0);
    setYearlyContribution(0);
    setExpectedReturn(0);
    setDuration(0);
  };

  const inputChangedHandler = (input, value) => {
    switch (input) {
      case "current-savings":
        Number(setCurrentSavings(value));
        break;
      case "yearly-contribution":
        Number(setCurrentSavings(value));
        break;
      case "expected-return":
        Number(setCurrentSavings(value));
        break;
      case "duration":
        Number(setCurrentSavings(value));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Economias Atuais:</label>
            <input
              type="number"
              id="current-savings"
              value={currentSavings}
              onChange={(e) =>
                inputChangedHandler("current-savings", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Contribuição Anual:</label>
            <input
              type="number"
              id="yearly-contribution"
              value={yearlyContribution}
              onChange={(e) =>
                inputChangedHandler("yearly-contribution", e.target.value)
              }
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">Retorno Esperado (%):</label>
            <input
              type="number"
              id="expected-return"
              value={expectedReturn}
              onChange={(e) =>
                inputChangedHandler("expected-returns", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Duração (anos):</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => inputChangedHandler("duration", e.target.value)}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <Button
            type="reset"
            className={styles.buttonAlt}
            label="Reset"
            onClick={resetHandler}
          />

          <Button type="submit" className={styles.button} label="Calculate" />
        </p>
      </form>
    </>
  );
};

export default UserInput;
