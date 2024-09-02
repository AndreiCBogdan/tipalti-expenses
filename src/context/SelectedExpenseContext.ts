import { Expense } from "@/types";
import { createContext, useState } from "react";

// const defaultExpense: Expense = {
//   id:
// }

export const SelectedExpenseContext = createContext(null);

export function SelectedExpenseProvider({children}) {
  const [selectedExpense, setSelectedExpense] = useState(null);
  

  // hmm why is this erroring
  return (
    <SelectedExpenseContext.Provider value={{ selectedExpense, setSelectedExpense }}>
      {children}
    </SelectedExpenseContext.Provider>
  );
}