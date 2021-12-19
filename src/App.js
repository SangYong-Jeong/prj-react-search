import React from 'react';
import { useSelector } from 'react-redux';

import Logo from './components/Logo';
import Form from './components/Form';
import Result from './components/Result';
import List from './components/List';

function App() {
  const { list } = useSelector(({ ajax }) => ajax);
  return (
    <div className="container">
      <Logo />
      <Form />
      <Result />
      {list.documents && <List />}
    </div>
  );
}

export default App;
