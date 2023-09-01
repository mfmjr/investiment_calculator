import { useState } from "react";
import Result from "./components/Result/Result";
import UserInput from "./components/Form/UserInput";
import Header from "./components/Header/Header";

function App() {
  const [userInput, setUserInput] = useState(null);
  console.log("userInput: ", userInput);

  const calculateHandler = (...userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    const [
      initialInvestment,
      yearlyContribution,
      expectedReturnPercentage,
      duration,
    ] = userInput;

    const expectedReturn = +expectedReturnPercentage / 100;
    let currentSavings = +initialInvestment;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investiment calculated yet.</p>
      )}
      {userInput && (
        <Result data={yearlyData} initialInvestment={userInput[0]} />
      )}
    </div>
  );
}

export default App;
