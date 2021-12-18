import React from 'react';

import ListWeb from '../components/List/ListWeb';
import PagerCp from '../components/pagination/PagerCp';

const ListWebContainerCp = ({ documents, meta, changePage, page, setPage }) => {
  const { pageable_count } = meta;
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
      <PagerCp
        pageCount={pageable_count}
        {...changePage}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default ListWebContainerCp;
