import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ListVideo from '../components/List/ListVideo';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 2;
`;

const ListVideoContainerCp = () => {
  const { list } = useSelector(({ ajax }) => ajax);
  const { documents } = list;
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ListVideoContainerCp;
