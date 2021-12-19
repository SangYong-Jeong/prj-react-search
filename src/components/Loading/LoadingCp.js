import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoaderWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 9999;
`;

const LoadingCp = () => {
  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" width="150px" height="150px" />
    </LoaderWrap>
  );
};

export default React.memo(LoadingCp);
