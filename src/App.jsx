import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './controllers/themeContext';

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
