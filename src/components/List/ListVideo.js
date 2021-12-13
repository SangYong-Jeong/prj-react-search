import React from 'react';
import styled, { CommonLink } from '../../style';
import moment from 'moment';

import getPlayTime from '../../util/playtime';

const List = styled.li`
  display: flex;
  padding: 1em 1em;
  border-bottom: 1px solid #dedede;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Thumb = styled.a`
  width: 148px;
  padding: 4px;
  border: 1px solid #03378a;
`;

const ContentWrap = styled.div`
  width: calc(100% - 148px);
  padding-left: 1.5em;
`;

const Title = styled.a`
  font-size: 1.25em;
  color: #03378a;
  margin-bottom: 0.5em;
  display: inline-block;
`;

const Author = styled.a`
  font-size: 1em;
  color: #03378a;
  margin-bottom: 0.325em;
  display: inline-block;
`;

const ListVideo = ({ author, play_time, title, url, datetime, thumbnail }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  const playtime = getPlayTime(play_time);
  return (
    <List>
      <Thumb href={url} target="_blank" rel="noreferrer">
        <img src={thumbnail} alt={title} className="w100" />
      </Thumb>
      <ContentWrap>
        <Title href={url} target="_blank" rel="noreferrer">
          {title}
        </Title>
        <div>
          <Author href={url} target="_blank" rel="noreferrer">
            {author}
          </Author>
          <span>{playtime}</span>
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        <div>{date}</div>
      </ContentWrap>
    </List>
  );
};

export default React.memo(ListVideo);
