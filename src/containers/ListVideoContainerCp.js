import React from 'react';

import ListVideo from '../components/List/ListVideo';

const ListVideoContainerCp = ({ documents }) => {
  return (
    <>
      {documents.map((document, i) => (
        <ListVideo
          key={i}
          author={document.author}
          play_time={document.play_time}
          thumbnail={document.thumbnail}
          title={document.title}
          url={document.url}
          datetime={document.datetime}
        />
      ))}
    </>
  );
};

export default ListVideoContainerCp;
