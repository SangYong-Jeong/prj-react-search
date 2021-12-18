import React from 'react';

import ListImg from '../components/List/ListImg';

const ListImgContainerCp = ({ documents }) => {
  return (
    <>
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
    </>
  );
};

export default ListImgContainerCp;
