import { Expense } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface ExpensesTableProps {
  expenses: Expense[];
}

export default function ExpensesTable(props: ExpensesTableProps) {
  const { expenses } = props;

  return (
    <div className="w-full border border-slate-300 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>
                {new Date(expense.date).toLocaleDateString()}
              </TableCell>
              <TableCell>{expense.merchant}</TableCell>
              <TableCell>{expense.amount}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell className="text-yellow-500">
                {expense.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
