import React, { useState, useCallback, useEffect } from 'react';
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
  padding-bottom: 100px;
`;

const ListVideoContainerCp = () => {
  const ajax = useSelector(({ ajax }) => ajax);
  const { list, error } = ajax;
  const { documents } = list;
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

  useEffect(() => {
    if (error) {
      setIsLoading(false);
    }
  }, [error]);

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
      {error === false && (
        <InView
          style={{ height: '200px' }}
          threshold={0.6}
          as="div"
          onChange={onChange}
        ></InView>
      )}
      {isLoading && <LoadingCp />}
    </Wrapper>
  );
};

export default React.memo(ListVideoContainerCp);
