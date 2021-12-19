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
  const { list, now } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <>
      {documents && now === 'web' && <ListWebContainerCp />}
      {documents && now === 'vclip' && <ListVideoContainerCp />}
      {documents && now === 'image' && <ListImgContainerCp />}
      {documents && now === 'blog' && <ListBlogContainerCp />}
      {documents && now === 'book' && <ListBookContainerCp />}
      {documents && now === 'cafe' && <ListCafeContainerCp />}
    </>
  );
};

export default List;
