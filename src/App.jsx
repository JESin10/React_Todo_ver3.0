import React from 'react';
import './App.css';
import Router from './shared/Router.js';
import { QueryClient, QueryClientProvider } from 'react-query';


const App = () => {
  return <Router />;
};

// const queryClient = new QueryClient();
// const App = () => {
//   return
//   <QueryClientProvider client={queryClient}>
//     <Router />;
//   </QueryClientProvider>
// };

export default App;
