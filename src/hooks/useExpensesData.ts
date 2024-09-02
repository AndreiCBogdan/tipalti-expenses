import { useQuery } from '@tanstack/react-query';

async function fetchExpenses() {
  try {
    const response = await fetch(
      'https://expenses-backend-mu.vercel.app/expenses',
      {
        headers: {
          'Content-Type': 'application/json',
          Username: 'andrei.bogdan',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetching expenses failed: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

export function useExpenseData() {
  const expensesQuery = useQuery({
    queryKey: ['expenses'],
    queryFn: fetchExpenses,
  });

  return {
    data: expensesQuery.data,
    loading: expensesQuery.isLoading,
    error: expensesQuery.error,
  };
}
