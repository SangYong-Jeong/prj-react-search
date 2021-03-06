import React from 'react';
import styled, { CommonLink, media } from '../../style';
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
  @media ${media.sm} {
    margin-bottom: 1em;
  }
`;

const ContentWrap = styled.div`
  width: calc(100% - 148px);
  padding-left: 1.5em;
  @media ${media.sm} {
    width: 100%;
    padding-left: 0;
  }
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

const PlayTime = styled.span`
  font-size: 1em;
  color: #03378a;
  margin-bottom: 0.325em;
`;

const Link = styled(CommonLink)`
  font-size: 1em;
  color: #03378a;
  margin-bottom: 0.325em;
  display: inline-block;
`;

const Date = styled.div`
  font-size: 0.875em;
  color: #999;
`;

const ListVideo = ({ author, play_time, title, url, datetime, thumbnail }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  const playtime = getPlayTime(play_time);
  return (
    <List>
      <Thumb href={url} target="_blank" rel="noreferrer">
        <img
          src={
            thumbnail || 'https://via.placeholder.com/138X78/eee?text=No+image'
          }
          alt={title}
          className="w100"
        />
      </Thumb>
      <ContentWrap>
        <Title href={url} target="_blank" rel="noreferrer">
          {title}
        </Title>
        <div>
          <Author href={url} target="_blank" rel="noreferrer">
            {author}
          </Author>{' '}
          | <PlayTime>{playtime}</PlayTime>
        </div>
        <Link href={url} target="_blank" rel="noreferrer">
          {url}
        </Link>
        <Date>{date}</Date>
      </ContentWrap>
    </List>
  );
};

export default React.memo(ListVideo);
