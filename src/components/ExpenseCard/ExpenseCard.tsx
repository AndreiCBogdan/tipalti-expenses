import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Expense } from '@/types';

interface ExpenseCardProps {
  expense: Expense | null;
}

export default function ExpenseCard(props: ExpenseCardProps) {
  const { expense } = props;

  return (
    expense && (
      <Card className="w-96 my-auto bg-white border border-black">
        <CardHeader>
          <CardTitle>{`Expense ID:${expense.id}`}</CardTitle>
          <CardContent>
            <p>{`Status: ${expense.status}`}</p>
            <p>{`Date: ${new Date(expense.date).toLocaleDateString()}`}</p>
            <p>{`Merchant: ${expense.merchant}`}</p>
            <p>{`Amount: ${expense.amount}`}</p>
            <p>{`Category: ${expense.category}`}</p>
            <p>{`Description: ${expense.description}`}</p>
          </CardContent>
        </CardHeader>
      </Card>
    )
  );
}
