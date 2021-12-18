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

const PagerCp = ({ pageCount }) => {
  const [page, setPage] = useState(1);
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
  return (
    <PagerWrapper>
      <FirstPager className="fa fa-arrow-left" disabled={page === 1} />
      <PagerPrev
        className="fa fa-angle-double-left"
        disabled={startPage === 1}
      />
      <Prev className="fa fa-angle-left" disabled={page === 1} />
      {pageArr.map((i) => (
        <Page key={i} page={page} i={i}>
          {i}
        </Page>
      ))}
      <Next className="fa fa-angle-right" disabled={page === totalPage} />
      <PagerNext
        className="fa fa-angle-double-right"
        disabled={endPage === totalPage}
      />
      <LastPager className="fa fa-arrow-right" disabled={page === totalPage} />
    </PagerWrapper>
  );
};

export default PagerCp;
