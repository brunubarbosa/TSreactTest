import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import Input from './components/Input';
import Content from './components/Content';

export default function App() {
  return(
    <div>
      <Provider store={store}>
        <Header />
        <Input />
        <Content />
      </Provider>
    </div>
  )
}
