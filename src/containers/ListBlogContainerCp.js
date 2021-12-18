import React from 'react';

import ListBlog from '../components/List/ListBlog';

const ListBlogContainerCp = ({ documents }) => {
  return (
    <>
      {documents.map((document, i) => (
        <ListBlog
          key={i}
          blogname={document.blogname}
          contents={document.contents}
          thumbnail={document.thumbnail}
          title={document.title}
          url={document.url}
          datetime={document.datetime}
        />
      ))}
    </>
  );
};

export default ListBlogContainerCp;
