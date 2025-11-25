import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Contact from '../Contact';

const queryClient = new QueryClient();

export default function ContactExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Contact />
      <Toaster />
    </QueryClientProvider>
  );
}
