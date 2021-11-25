import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import getPlayTime from '../../util/playtime';

const ListVideo = ({ author, play_time, title, url, datetime, thumbnail }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  const playtime = getPlayTime(play_time);
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={thumbnail} alt={title} />
      </a>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            {author}
          </a>
          <span>{playtime}</span>
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        <div>{date}</div>
      </div>
    </li>
  );
};

export default React.memo(ListVideo);
