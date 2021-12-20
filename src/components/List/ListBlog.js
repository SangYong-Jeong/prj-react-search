import React from 'react';
import styled, { CommonLink, media } from '../../style';
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
  @media ${media.sm} {
    margin-bottom: 1em;
  }
`;

const ContentWrap = styled.div`
  width: calc(100% - 140px);
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
  margin-bottom: 0.325em;
  display: inline-block;
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

const ListBlog = ({ blogname, contents, thumbnail, title, url, datetime }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <List>
      <Thumb href={url} target="_blank" rel="noreferrer">
        <img
          src={thumbnail || 'https://via.placeholder.com/130/eee?text=No+image'}
          alt={title}
        />
      </Thumb>
      <ContentWrap>
        <Title
          href={url}
          target="_blank"
          rel="noreferrer"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Title>
        <Content dangerouslySetInnerHTML={{ __html: contents }}></Content>
        <Name href={url} target="_blank" rel="noreferrer">
          {blogname}
        </Name>{' '}
        |{' '}
        <Link href={url} target="_blank" rel="noreferrer">
          {url}
        </Link>
        <Date className="dt">{date}</Date>
      </ContentWrap>
    </List>
  );
};

export default React.memo(ListBlog);
