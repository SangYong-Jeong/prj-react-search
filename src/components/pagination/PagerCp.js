import React from 'react';
import styled from '../../style';

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
`;

const FirstPager = styled(Button)``;

const PagerPrev = styled(Button)``;

const Prev = styled(Button)``;

const Next = styled(Button)``;

const PagerNext = styled(Button)``;

const LastPager = styled(Button)``;

const PagerCp = () => {
  return (
    <PagerWrapper>
      <FirstPager className="fa fa-arrow-left" />
      <PagerPrev className="fa fa-angle-double-left" />
      <Prev className="fa fa-angle-left" />
      <Next className="fa fa-angle-right" />
      <PagerNext className="fa fa-angle-double-right" />
      <LastPager className="fa fa-arrow-right" />
    </PagerWrapper>
  );
};

export default PagerCp;
