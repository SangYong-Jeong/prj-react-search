import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { InView } from 'react-intersection-observer';

import { InfiniteAsync } from '../modules/ajax';
import { changePage } from '../modules/pager';

import ListImg from '../components/List/ListImg';
import LoadingCp from '../components/Loading/LoadingCp';
import ModalCp from '../components/modal/ModalCp';

const Wrapper = styled.ul`
  border-top: 1px solid #dedede;
  overflow-wrap: break-word;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 100px;
`;

const ListImgContainerCp = () => {
  const { isShow } = useSelector(({ modal }) => modal);
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
    <>
      <Wrapper>
        {documents.map((document, i) => (
          <ListImg key={i} {...document} />
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
      {isShow && <ModalCp />}
    </>
  );
};

export default React.memo(ListImgContainerCp);
