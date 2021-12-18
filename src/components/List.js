import React from 'react';
import styled, { css } from 'styled-components';

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
    props.current === 'image' &&
    css`
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
    `}
  ${(props) =>
    props.current === 'book' &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
`;

const List = ({ lists, category }) => {
  const { documents } = lists;
  const { current } = category;
  return (
    <StyledLists current={current}>
      {documents && current === 'web' && (
        <ListWebContainerCp documents={documents} />
      )}
      {documents && current === 'vclip' && (
        <ListVideoContainerCp documents={documents} />
      )}
      {documents && current === 'image' && (
        <ListImgContainerCp documents={documents} />
      )}
      {documents && current === 'blog' && (
        <ListBlogContainerCp documents={documents} />
      )}
      {documents && current === 'book' && (
        <ListBookContainerCp documents={documents} />
      )}
      {documents && current === 'cafe' && (
        <ListCafeContainerCp documents={documents} />
      )}
    </StyledLists>
  );
};

export default List;
