import React from 'react';
import styled, { CommonLink } from '../../style';
import moment from 'moment';

const List = styled.li`
  display: flex;
  padding: 1em 1em;
  border-bottom: 1px solid #dedede;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Thumb = styled.a`
  width: 140px;
  padding: 4px;
  border: 1px solid #03378a;
`;

const ContentWrap = styled.div`
  width: calc(100% - 140px);
  padding-left: 1.5em;
`;

const Title = styled.a`
  font-size: 1.25em;
  color: #03378a;
  margin-bottom: 0.5em;
  display: inline-block;
`;

const Content = styled.p`
  font-size: 1em;
  line-height: 1.25;
  color: #777;
  margin-bottom: 0.75em;
`;

const Name = styled.a`
  font-size: 1em;
  color: #03378a;
  margin-bottom: 0.75em;
  display: inline-block;
`;

const Link = styled(CommonLink)`
  font-size: 1em;
  color: #03378a;
  margin-bottom: 0.75em;
  display: inline-block;
`;

const Date = styled.div`
  font-size: 0.875em;
  color: #999;
`;

const ListCafe = ({ cafename, contents, datetime, thumbnail, url }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <List>
      <Thumb href={url} target="_blank" rel="noreferrer">
        <img
          src={thumbnail || 'https://via.placeholder.com/130/eee?text=No+image'}
          alt={cafename}
          className="w100"
        />
      </Thumb>
      <ContentWrap>
        <Title href={url} target="_blank" rel="noreferrer">
          {cafename}
        </Title>
        <Content>{contents}</Content>
        <Name href={url} target="_blank" rel="noreferrer">
          {cafename}
        </Name>{' '}
        | <Link href={url}>{url}</Link>
        <Date>{date}</Date>
      </ContentWrap>
    </List>
  );
};

export default React.memo(ListCafe);
