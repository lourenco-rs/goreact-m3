import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import TodoList from './TodoList';

console.tron.log('testando console do tron');
const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
