import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/discover" element={<Layout><Home /></Layout>} />
          <Route path="/animes" element={<Layout><Home /></Layout>} />
          <Route path="/anime/:id" element={<Layout><Home /></Layout>} />
          <Route path="/communities" element={<Layout><Home /></Layout>} />
          <Route path="/community/:id" element={<Layout><Home /></Layout>} />
          <Route path="/profile" element={<Layout><Home /></Layout>} />
          <Route path="/create" element={<Layout><Home /></Layout>} />
          <Route path="/notifications" element={<Layout><Home /></Layout>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>

  </QueryClientProvider>
);

export default App;
