import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ListBlog = ({ blogname, contents, thumbnail, title, url, datetime }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={thumbnail} alt={title} />
      </a>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          dangerouslySetInnerHTML={{ __html: title }}
        ></a>
        <p dangerouslySetInnerHTML={{ __html: contents }}></p>
        <a href={url} target="_blank" rel="noreferrer">
          {blogname}
        </a>{' '}
        |{' '}
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        <div>{date}</div>
      </div>
    </li>
  );
};

export default ListBlog;
