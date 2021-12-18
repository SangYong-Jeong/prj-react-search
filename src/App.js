import React, { useState, useCallback, useRef } from 'react';

import Logo from './components/Logo';
import Form from './components/Form';
import Result from './components/Result';
import List from './components/List';

import axios from 'axios';

const apiKey = 'KakaoAK 4545d096ee04bdcea13013e722fa668f';
const size = { web: 10, blog: 10, book: 10, cafe: 10, vclip: 15, image: 80 };

function App() {
  let host = 'https://dapi.kakao.com/';
  const [param, setParam] = useState('v2');
  const [cate, setCate] = useState('');
  const [query, setQuery] = useState('');
  const [lists, setLists] = useState({});
  const [page, setPage] = useState(1);
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

  const onFirstPage = useCallback(
    async (e) => {
      setPage(1);
      try {
        const { data } = await axios.get(host, {
          params: { query, page, size: size[cate] },
          headers: { Authorization: apiKey },
        });
        category.current = cate;
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    },
    [page, cate, host, query]
  );
  const onPrevPager = useCallback(
    async (startPage) => {
      try {
        setPage(startPage - 1);
        const { data } = await axios.get(host, {
          params: { query, page, size: size[cate] },
          headers: { Authorization: apiKey },
        });
        category.current = cate;
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    },
    [page, cate, host, query]
  );
  const onPrevPage = useCallback(
    async (e) => {
      try {
        setPage(page - 1);
        const { data } = await axios.get(host, {
          params: { query, page, size: size[cate] },
          headers: { Authorization: apiKey },
        });
        category.current = cate;
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    },
    [page, cate, host, query]
  );
  const onChangePage = useCallback(
    async (i) => {
      try {
        setPage(i);
        const { data } = await axios.get(host, {
          params: { query, page, size: size[cate] },
          headers: { Authorization: apiKey },
        });
        category.current = cate;
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    },
    [page, cate, host, query]
  );
  const onNextPage = useCallback(
    async (e) => {
      try {
        setPage(page + 1);
        const { data } = await axios.get(host, {
          params: { query, page, size: size[cate] },
          headers: { Authorization: apiKey },
        });
        category.current = cate;
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    },
    [page, cate, host, query]
  );
  const onNextPager = useCallback((e, endPage) => {
    setPage(endPage + 1);
  }, []);
  const onLastPage = useCallback((e, totalPage) => {
    setPage(totalPage);
  }, []);

  const changePage = {
    onFirstPage,
    onPrevPager,
    onPrevPage,
    onChangePage,
    onNextPage,
    onNextPager,
    onLastPage,
  };

  const onSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        if (cate && query) {
          console.log(host);
          const { data } = await axios.get(host, {
            params: { query, page, size: size[cate] },
            headers: { Authorization: apiKey },
          });
          category.current = cate;
          setLists(data);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [host, query, cate, category, page]
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
      <Result lists={lists} />
      <List
        page={page}
        setPage={setPage}
        lists={lists}
        category={category}
        changePage={changePage}
      />
    </div>
  );
}

export default App;
