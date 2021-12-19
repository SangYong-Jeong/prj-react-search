import React from 'react';
import { useSelector } from 'react-redux';

import ListWebContainerCp from '../containers/ListWebContainerCp';
import ListVideoContainerCp from '../containers/ListVideoContainerCp';
import ListImgContainerCp from '../containers/ListImgContainerCp';
import ListBlogContainerCp from '../containers/ListBlogContainerCp';
import ListBookContainerCp from '../containers/ListBookContainerCp';
import ListCafeContainerCp from '../containers/ListCafeContainerCp';

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

export default React.memo(List);
