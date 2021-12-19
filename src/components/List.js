import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import ListWebContainerCp from '../containers/ListWebContainerCp';
import ListVideoContainerCp from '../containers/ListVideoContainerCp';
import ListImgContainerCp from '../containers/ListImgContainerCp';
import ListBlogContainerCp from '../containers/ListBlogContainerCp';
import ListBookContainerCp from '../containers/ListBookContainerCp';
import ListCafeContainerCp from '../containers/ListCafeContainerCp';

const StyledLists = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 2;
  ${(props) =>
    props.cate === 'image' &&
    css`
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
    `}
  ${(props) =>
    props.cate === 'book' &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
`;

const List = () => {
  const { list, cate } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <StyledLists cate={cate}>
      {documents && cate === 'web' && <ListWebContainerCp />}
      {documents && cate === 'vclip' && <ListVideoContainerCp />}
      {documents && cate === 'image' && <ListImgContainerCp />}
      {documents && cate === 'blog' && <ListBlogContainerCp />}
      {documents && cate === 'book' && <ListBookContainerCp />}
      {documents && cate === 'cafe' && <ListCafeContainerCp />}
    </StyledLists>
  );
};

export default List;
