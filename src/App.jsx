import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { ThemeProvider } from './context/theme';
import useTheme from './context/theme';

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
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
