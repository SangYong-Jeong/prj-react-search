import React from 'react';
import { useSelector } from 'react-redux';

import ListWeb from '../components/List/ListWeb';
import PagerCp from '../components/pagination/PagerCp';

const ListWebContainerCp = () => {
  const { list } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  console.log(documents);
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
      <PagerCp />
    </>
  );
};

export default ListWebContainerCp;
