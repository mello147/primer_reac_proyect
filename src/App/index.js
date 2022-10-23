import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import { TodoIConProvider } from '../TodoIcon/TodoIconContext';



function App() {


  return (
    <TodoProvider>
      <TodoIConProvider>
      <AppUI />
      </TodoIConProvider>
    </TodoProvider>
  );
}

export default App;
