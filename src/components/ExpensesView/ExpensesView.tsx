import { useExpenseData } from '@/hooks/useExpensesData';
import ExpensesTable from '../ExpensesTable/ExpensesTable';
// import ExpenseCard from '../ExpenseCard/ExpenseCard';

export default function ExpensesView() {
  const expensesQuery = useExpenseData();

  if (expensesQuery.loading) {
    return <div>Loading</div>;
  }

  if (expensesQuery.error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="font-semibold text-2xl">Expenses Table</div>
        <ExpensesTable expenses={expensesQuery.data} />
      </div>
      {/* <div className="w-full min-h-screen absolute inset-0 bg-slate-400 opacity-60 flex flex-col items-center">
        <ExpenseCard expense={} />
      </div> */}
    </>
  );
}
