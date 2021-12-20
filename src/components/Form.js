import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cate, Param, Query, ListAsync } from '../modules/ajax';
import { changePage } from '../modules/pager';
import styled, { media } from '../style';

const Select = styled.select`
  @media ${media.xs} {
    margin-bottom: 1em;
  }
`;

const Input = styled.input`
  @media ${media.xs} {
    margin-bottom: 1em;
  }
`;

const Form = () => {
  const dispatch = useDispatch();
  const ajax = useSelector(({ ajax }) => ajax);
  const { query } = useSelector(({ ajax }) => ajax);
  const onChangeCateParam = useCallback(
    (e) => {
      dispatch(Cate(e.target.value));
      if (e.target.value === 'book') dispatch(Param('v3'));
      else dispatch(Param('v2'));
    },
    [dispatch]
  );

  const onChangeQuery = useCallback(
    (e) => {
      dispatch(Query(e.target.value));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(ListAsync(ajax, changePage, 1));
    },
    [dispatch, ajax]
  );

  return (
    <form className="form-inline mb-5" onSubmit={onSubmit}>
      <Select
        name="category"
        className="form-control mr-2"
        onChange={onChangeCateParam}
        defaultValue=""
      >
        <option value="">선택하세요</option>
        <option value="web">웹사이트</option>
        <option value="vclip">동영상</option>
        <option value="image">이미지</option>
        <option value="blog">블로그</option>
        <option value="book">도서</option>
        <option value="cafe">카페</option>
      </Select>
      <Input
        type="text"
        className="form-control mr-2 flex-grow-1"
        name="query"
        value={query}
        onChange={onChangeQuery}
        autoFocus
      />
      <button type="submit" className="btn btn-primary">
        검색
      </button>
    </form>
  );
};

export default React.memo(Form);
