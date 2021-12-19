import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from '../../style';
import { ListAsync } from '../../modules/ajax';
import { changePage } from '../../modules/pager';
import pagerInit from '../../lib/pager-init';

const PagerWrapper = styled.div`
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  margin-right: -1px;
  text-decoration: none;
  font-style: normal;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? '#efefef' : '')};
`;

const FirstPager = styled(Button)``;

const PagerPrev = styled(Button)``;

const Prev = styled(Button)``;

const Next = styled(Button)``;

const PagerNext = styled(Button)``;

const LastPager = styled(Button)``;

const Page = styled(Button)`
  ${(props) =>
    props.page === props.i
      ? css`
          background-color: #333;
          color: #fff;
        `
      : ''}
`;

const PagerCp = () => {
  const ajax = useSelector(({ ajax }) => ajax);
  const { list } = ajax;
  const { page, pagerCnt } = useSelector(({ pager }) => pager);
  const dispatch = useDispatch();
  const { totalPage, startPage, endPage, pageArr } = pagerInit(
    page,
    pagerCnt,
    list.meta.pageable_count,
    dispatch,
    changePage
  );
  const onClick = useCallback(
    (e) => {
      dispatch(ListAsync(ajax, changePage, Number(e.target.dataset.page)));
    },
    [dispatch, ajax]
  );
  return (
    <PagerWrapper>
      <FirstPager
        className="fa fa-arrow-left"
        disabled={page === 1}
        data-page={1}
        onClick={onClick}
      />
      <PagerPrev
        className="fa fa-angle-double-left"
        disabled={startPage === 1}
        data-page={startPage === 1 ? 1 : startPage - 1}
        onClick={onClick}
      />
      <Prev
        className="fa fa-angle-left"
        disabled={page === 1}
        data-page={page === 1 ? 1 : page - 1}
        onClick={onClick}
      />
      {pageArr.map((i) => (
        <Page key={i} page={page} i={i} data-page={i} onClick={onClick}>
          {i}
        </Page>
      ))}
      <Next
        className="fa fa-angle-right"
        disabled={page === totalPage}
        data-page={page === totalPage ? totalPage : page + 1}
        onClick={onClick}
      />
      <PagerNext
        className="fa fa-angle-double-right"
        disabled={endPage === totalPage}
        data-page={page === totalPage ? totalPage : endPage + 1}
        onClick={onClick}
      />
      <LastPager
        className="fa fa-arrow-right"
        disabled={page === totalPage}
        data-page={totalPage}
        onClick={onClick}
      />
    </PagerWrapper>
  );
};

export default React.memo(PagerCp);
