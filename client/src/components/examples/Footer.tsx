import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Footer from '../Footer';

const queryClient = new QueryClient();

export default function FooterExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}
