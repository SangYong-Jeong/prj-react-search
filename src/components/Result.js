import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: right;
  margin-bottom: 1.5em;
  font-size: 1em;
`;

const Result = () => {
  return (
    <Wrapper>
      검색결과: <span className="font-weight-bold"></span>건
    </Wrapper>
  );
};

export default Result;
