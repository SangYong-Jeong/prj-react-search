import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ListWeb = ({ contents, title, url, datetime }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        dangerouslySetInnerHTML={{ __html: title }}
      ></a>
      <p>{contents}</p>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
      <div>{date}</div>
    </li>
  );
};

export default ListWeb;
