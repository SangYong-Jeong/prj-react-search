import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ListBook = ({
  authors,
  publisher,
  contents,
  isbn,
  price,
  sale_price,
  thumbnail,
  title,
  datetime,
  url,
  translators,
}) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </li>
  );
};

export default ListBook;
