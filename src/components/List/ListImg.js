import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { show } from '../../modules/modal';

import styled, { media } from '../../style';

const List = styled.li`
  width: 12.5%;
  border: 5px solid #fff;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    border-color: #548308;
    transform: scale(1.5);
    box-shaodw: 0 0 10px rgba(0, 0, 0, 0.4);
    z-index: 9;
  }
  @media ${media.lg} {
    width: 16.6667%;
  }
  @media ${media.md} {
    width: 20%;
  }
  @media ${media.sm} {
    width: 33.3333%;
  }
  @media ${media.xs} {
    width: 50%;
  }
`;

const Info = styled.div``;

const ListImg = (props) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(show(props));
  }, [dispatch, props]);

  return (
    <List onClick={onClick}>
      <img src={props.thumbnail_url} alt={props.collection} className="w100" />
      <Info></Info>
    </List>
  );
};

export default React.memo(ListImg);
