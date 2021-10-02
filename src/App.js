import {useState} from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Toggle from "./components/UI/Toggle";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Refrigerator',
    amount: 1099.99,
    date: new Date(2019, 7, 14),
  },
  { 
  id: 'e2', 
  title: 'TV', 
  amount: 899.69, 
  date: new Date(2020, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 395.89,
    date: new Date(2021, 1, 7),
  },
  {
    id: 'e4',
    title: 'Washing Machine',
    amount: 520.50,
    date: new Date(2021, 2, 14),
  },
  {
    id: 'e5',
    title: 'Air Conditioner',
    amount: 1120,
    date: new Date(2021, 4, 26),
  },
  {
    id: 'e6',
    title: 'Car Tires',
    amount: 485,
    date: new Date(2020, 5, 6),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      <Toggle />
    </div>
  );
}

export default App;
