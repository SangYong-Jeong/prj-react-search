import React from 'react';
import styled, { CommonLink } from '../../style';
import moment from 'moment';

const List = styled.li`
  color: #555;
  border-bottom: 1px solid #dedede;
  margin-bottom: 1em;
  padding: 1em 0;
`;

const Title = styled.a`
  font-size: 1.325em;
  color: #111111;
  margin-bottom: 1em;
  text-decoration: underline;
  display: inline-block;
`;

const Content = styled.p`
  font-size: 1.125em;
  margin-bottom: 0.5em;
  line-height: 1.2;
`;

const Link = styled(CommonLink)`
  width: 100%;
  color: #155daf;
  margin-bottom: 0.5em;
  display: inline-block;
`;

const ListWeb = ({ contents, title, url, datetime }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <List>
      <Title
        href={url}
        target="_blank"
        rel="noreferrer"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Content dangerouslySetInnerHTML={{ __html: contents }} />
      <Link href={url} target="_blank" rel="noreferrer">
        {url}
      </Link>
      <div>{date}</div>
    </List>
  );
};

export default ListWeb;
