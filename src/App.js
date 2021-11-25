import React, { useState, useCallback, useRef } from 'react';

import Logo from './components/Logo';
import Form from './components/Form';
import Result from './components/Result';
import List from './components/List';

import axios from 'axios';

const apiKey = 'KakaoAK 4545d096ee04bdcea13013e722fa668f';

function App() {
  let host = 'https://dapi.kakao.com/';
  const [param, setParam] = useState('v2');
  const [cate, setCate] = useState('');
  const [query, setQuery] = useState('');
  const [lists, setLists] = useState({});
  let category = useRef('');
  host += `${param}/search/${cate}`;

  const onChangeCateParam = useCallback(
    (e) => {
      e.target.value === 'book' ? setParam('v3') : setParam('v2');
      setCate(e.target.value);
    },
    [setCate, setParam]
  );

  const onChangeQuery = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  const onSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        if (cate && query) {
          const { data } = await axios.get(host, {
            params: { query },
            headers: { Authorization: apiKey },
          });
          category.current = cate;
          setLists(data);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [host, query, cate, category]
  );
  console.log(lists);
  return (
    <div className="container">
      <Logo />
      <Form
        onChangeCateParam={onChangeCateParam}
        onChangeQuery={onChangeQuery}
        onSubmit={onSubmit}
        query={query}
      />
      <Result />
      <List lists={lists} category={category} />
    </div>
  );
}

export default App;
