import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ListBlog from '../components/List/ListBlog';
import PagerCp from '../components/pagination/PagerCp';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 2;
`;

const ListBlogContainerCp = () => {
  const { list } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      {documents.length !== 0 && <PagerCp />}
    </>
  );
};

export default React.memo(ListBlogContainerCp);
