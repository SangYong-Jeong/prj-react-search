import React, { useState, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import Logo from './components/Logo';
import Form from './components/Form';
import Result from './components/Result';
import List from './components/List';

import axios from 'axios';

function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      {/* <Result />
      <List /> */}
    </div>
  );
}

export default App;
