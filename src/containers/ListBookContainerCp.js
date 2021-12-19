import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ListBook from '../components/List/ListBook';
import PagerCp from '../components/pagination/PagerCp';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
`;

const ListBookContainerCp = () => {
  const { list } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <>
      <Wrapper>
        {documents.map((document, i) => (
          <ListBook
            key={i}
            authors={document.authors} // 배열
            translators={document.translators} // 배열
            publisher={document.publisher}
            contents={document.contents}
            isbn={document.isbn}
            price={document.price}
            sale_price={document.sale_price}
            status={document.status}
            thumbnail={document.thumbnail}
            url={document.url}
            title={document.title}
            datetime={document.datetime}
          />
        ))}
      </Wrapper>
      {documents.length !== 0 && <PagerCp />}
    </>
  );
};

export default React.memeo(ListBookContainerCp);
