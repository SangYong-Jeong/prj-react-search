import React from 'react';

import ListWeb from '../components/List/ListWeb';

const ListWebContainerCp = ({ documents }) => {
  return (
    <>
      {documents.map((document, i) => (
        <ListWeb
          key={i}
          contents={document.contents}
          title={document.title}
          url={document.url}
          datetime={document.datetime}
        />
      ))}
    </>
  );
};

export default ListWebContainerCp;
