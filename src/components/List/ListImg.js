import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
    <li>
      <img src={thumbnail_url} alt={collection} />
      <div></div>
    </li>
  );
};

export default ListImg;
