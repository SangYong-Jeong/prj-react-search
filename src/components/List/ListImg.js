import React from 'react';
import styled from '../../style';
import moment from 'moment';

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
`;

const Info = styled.div``;

const ListImg = ({
  collection,
  display_sitename,
  doc_url,
  image_url,
  thumbnail_url,
  datetime,
}) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <List>
      <img src={thumbnail_url} alt={collection} className="w100" />
      <Info></Info>
    </List>
  );
};

export default React.memo(ListImg);
