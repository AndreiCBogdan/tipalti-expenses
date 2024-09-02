import { useExpenseData } from '@/hooks/useExpensesData';
import ExpensesTable from '../ExpensesTable/ExpensesTable';

export default function ExpensesView() {
  const expensesQuery = useExpenseData();

  console.log(expensesQuery);

  if (expensesQuery.loading) {
    return <div>Loading</div>;
  }

  if (expensesQuery.error) {
    return <div>Error</div>;
  }

  return (
    <div className="container mx-auto flex flex-col items-center gap-4">
      <div className="font-semibold text-2xl">Expenses Table</div>
      <ExpensesTable expenses={expensesQuery.data} />
    </div>
  );
}
