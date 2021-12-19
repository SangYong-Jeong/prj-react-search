import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ListCafe from '../components/List/ListCafe';
import PagerCp from '../components/pagination/PagerCp';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 2;
`;

const ListCafeContainerCp = () => {
  const { list } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <>
      <Wrapper>
        {documents.map((document, i) => (
          <ListCafe
            key={i}
            cafename={document.cafename}
            contents={document.contents}
            datetime={document.datetime}
            thumbnail={document.thumbnail}
            url={document.url}
          />
        ))}
      </Wrapper>
      {documents.length !== 0 && <PagerCp />}
    </>
  );
};

export default React.memo(ListCafeContainerCp);
