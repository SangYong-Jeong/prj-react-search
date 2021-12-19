import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { InView } from 'react-intersection-observer';

import { InfiniteAsync } from '../modules/ajax';
import { changePage } from '../modules/pager';

import ListImg from '../components/List/ListImg';
import LoadingCp from '../components/Loading/LoadingCp';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;

const ListImgContainerCp = () => {
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
      {meta.is_end === false && (
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

export default ListImgContainerCp;
