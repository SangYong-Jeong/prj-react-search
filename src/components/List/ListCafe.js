import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ListCafe = ({ cafename, contents, datetime, thumbnail, url }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={thumbnail || 'https://via.placeholder.com/130'}
          alt={cafename}
        />
      </a>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          {cafename}
        </a>
        <p>{contents}</p>
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        <div>{date}</div>
      </div>
    </li>
  );
};

export default ListCafe;
