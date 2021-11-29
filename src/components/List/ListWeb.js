import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledListWeb = styled.li`
  color: #555;
  border-bottom: 1px solid #dedede;
  margin-bottom: 1em;
  padding: 1em 0;
`;

const StyledTitle = styled.a`
  font-size: 1.325em;
  color: #111111;
  margin-bottom: 1em;
  text-decoration: underline;
  display: inline-block;
`;

const StyledContent = styled.p`
  font-size: 1.125em;
  margin-bottom: 0.5em;
  line-height: 1.2;
`;

const StyledLink = styled.a`
  width: 100%;
  color: #155daf;
  margin-bottom: 0.5em;
  display: inline-block;
`;

const ListWeb = ({ contents, title, url, datetime }) => {
  console.log(title);
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <StyledListWeb>
      <StyledTitle
        href={url}
        target="_blank"
        rel="noreferrer"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <StyledContent dangerouslySetInnerHTML={{ __html: contents }} />
      <StyledLink href={url} target="_blank" rel="noreferrer">
        {url}
      </StyledLink>
      <div>{date}</div>
    </StyledListWeb>
  );
};

export default ListWeb;
