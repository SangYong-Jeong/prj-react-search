import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ListImg from '../components/List/ListImg';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;

const ListImgContainerCp = () => {
  const { list } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <Wrapper>
      {documents.map((document, i) => (
        <ListImg
          key={i}
          collection={document.collection}
          display_sitename={document.display_sitename}
          doc_url={document.doc_url}
          image_url={document.image_url}
          thumbnail_url={document.thumbnail_url}
          datetime={document.datetime}
        />
      ))}
    </Wrapper>
  );
};

export default ListImgContainerCp;
