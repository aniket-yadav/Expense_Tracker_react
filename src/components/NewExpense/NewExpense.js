import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpenseAdd(expenseData);
  };

  const clickHandler = (event) => {
    setShowForm((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onCancelClick={clickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      ) : (
        <button onClick={clickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
