import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { InView } from 'react-intersection-observer';

import { InfiniteAsync } from '../modules/ajax';
import { changePage } from '../modules/pager';

import ListVideo from '../components/List/ListVideo';
import LoadingCp from '../components/Loading/LoadingCp';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 2;
`;

const ListVideoContainerCp = () => {
  const ajax = useSelector(({ ajax }) => ajax);
  const { list } = ajax;
  const { documents, meta } = list;
  const { page } = useSelector(({ pager }) => pager);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const onChange = useCallback(
    (inView, entry) => {
      inView === true ? setIsLoading(true) : setIsLoading(false);
      dispatch(InfiniteAsync(ajax, changePage, page + 1));
    },
    [ajax, dispatch, page]
  );

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
      <InView
        style={{ height: '200px' }}
        threshold={0.6}
        as="div"
        onChange={onChange}
      ></InView>
      {isLoading && <LoadingCp />}
    </Wrapper>
  );
};

export default ListVideoContainerCp;
