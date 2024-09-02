import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ExpensesView from './components/ExpensesView/ExpensesView';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full min-h-screen px-24 py-12">
        <ExpensesView />
      </div>
    </QueryClientProvider>
  );
}

export default App;
