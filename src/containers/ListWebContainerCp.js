import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ListWeb from '../components/List/ListWeb';
import PagerCp from '../components/pagination/PagerCp';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 2;
`;

const ListWebContainerCp = () => {
  const { list } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <>
      <Wrapper>
        {documents.map((document, i) => (
          <ListWeb
            key={i}
            contents={document.contents}
            title={document.title}
            url={document.url}
            datetime={document.datetime}
          />
        ))}
      </Wrapper>
      {documents.length !== 0 && <PagerCp />}
    </>
  );
};

export default ListWebContainerCp;
