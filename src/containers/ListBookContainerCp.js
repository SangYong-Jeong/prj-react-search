import React from 'react';

import ListBook from '../components/List/ListBook';

const ListBookContainerCp = ({ documents }) => {
  return (
    <>
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
    </>
  );
};

export default ListBookContainerCp;
