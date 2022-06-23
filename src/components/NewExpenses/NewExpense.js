import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }; // need to understand

    console.log("----Here we took  the data form the 1st data crated");
    console.log(expenseData);
    props.onAddExpense(expenseData);
    // "by this method we will be transfarin the data to the onAddExpense props in order to the get the data in PARENTS class"

    console.log(
      "by this method we will be transfarin the data to the onAddExpense props in order to the get the data in PARENTS class"
    );
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
