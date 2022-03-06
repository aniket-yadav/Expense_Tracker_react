import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [expenses, filterExpense] = useState(props.expenses);

  const [selectedYear, setSelectedYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
    filterExpense([
      ...props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
      ),
    ]);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onYearChange={yearChangeHandler}
      ></ExpenseFilter>

      <ExpensesChart expenses={expenses}></ExpensesChart>
      <ExpensesList items={expenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
