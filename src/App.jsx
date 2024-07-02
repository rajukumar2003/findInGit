import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { ThemeProvider } from './context/theme';
import useTheme from './context/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </QueryClientProvider>

  );
}

const ThemedApp = () => {
  const { themeMode } = useTheme();

  return (
    <div className="min-h-screen">
        <section className='p-20 mx-40'>
          <Nav />
          <SearchBar />
        </section>
    </div>
  );
}

export default App;
