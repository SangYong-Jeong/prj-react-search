import React from 'react';

import ListCafe from '../components/List/ListCafe';

const ListCafeContainerCp = ({ documents }) => {
  return (
    <>
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
    </>
  );
};

export default ListCafeContainerCp;
