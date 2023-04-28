import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredAmount: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);     ........Usual approach.....................
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,       --------- Alternative Approach -------------
    // });

  
    setUserInput((prevState)=>{
      return {
      ...prevState,
      enteredTitle: event.target.value
    }
    })
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);   ........Usual approach.....................
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,    --------- Alternative Approach -------------
    // });
    setUserInput((prevState)=>{
      return {
      ...prevState,
      enteredDate: event.target.value
    }
    })
    
  };
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);  ........Usual approach.....................
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,   --------- Alternative Approach -------------
    // });
    setUserInput((prevState)=>{
      return {
      ...prevState,
      enteredAmount: event.target.value
    }
    })
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount : userInput.enteredAmount,
      date: new Date(userInput.enteredDate),

    }
    props.onSaveExpenseData(expenseData)

    setUserInput({
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
    })

  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
              min={0.01}
              step={0.01}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
              min="2019-010-01"
              max="2023-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>

          <button type="submit">Add Expense</button>

        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
