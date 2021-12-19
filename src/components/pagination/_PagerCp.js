import React, { useState } from 'react';
import styled, { css } from '../../style';

const PagerWrapper = styled.div`
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

const PagerCp = ({
  page,
  setPage,
  pageCount,
  onFirstPage,
  onPrevPager,
  onPrevPage,
  onChangePage,
  onNextPage,
  onNextPager,
  onLastPage,
}) => {
  let totalPage = Math.ceil(pageCount / 10); // 총 페이지수
  if (totalPage > 50) totalPage = 50;
  if (page > totalPage) setPage(totalPage);
  const pagerCnt = 5; // pager에 보여질 페에지 수
  let startPage = '';
  let endPage = '';
  startPage = Math.floor((page - 1) / pagerCnt) * pagerCnt + 1;
  endPage = startPage + pagerCnt - 1;
  if (endPage > totalPage) endPage = totalPage;
  const pageArr = [];
  for (let i = startPage; i <= endPage; i++) {
    pageArr.push(i);
  }
  console.log(onFirstPage);
  return (
    <PagerWrapper>
      <FirstPager
        className="fa fa-arrow-left"
        disabled={page === 1}
        onClick={onFirstPage}
      />
      <PagerPrev
        className="fa fa-angle-double-left"
        disabled={startPage === 1}
        onClick={() => onPrevPager(startPage)}
      />
      <Prev
        className="fa fa-angle-left"
        disabled={page === 1}
        onClick={onPrevPage}
      />
      {pageArr.map((i) => (
        <Page key={i} page={page} i={i} onClick={() => onChangePage(i)}>
          {i}
        </Page>
      ))}
      <Next
        className="fa fa-angle-right"
        disabled={page === totalPage}
        onClick={onNextPage}
      />
      <PagerNext
        className="fa fa-angle-double-right"
        disabled={endPage === totalPage}
        onClick={onNextPager}
      />
      <LastPager
        className="fa fa-arrow-right"
        disabled={page === totalPage}
        onClick={onLastPage}
      />
    </PagerWrapper>
  );
};

export default PagerCp;
