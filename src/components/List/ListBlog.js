import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledListBlog = styled.li`
  display: flex;
  padding: 1em 1em;
  border-bottom: 1px solid #dedede;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const StyledThumbs = styled.a`
  width: 140px;
  padding: 4px;
  border: 1px solid #03378a;
`;

const StyledContent = styled.div`
  width: calc(100% - 140px);
  padding-left: 1.5em;
  .title {
    font-size: 1.25em;
    color: #03378a;
    margin-bottom: 0.5em;
    display: inline-block;
  }
  .content {
    font-size: 1em;
    line-height: 1.25;
    color: #777;
    margin-bottom: 0.75em;
  }
  .name {
    font-size: 1em;
    color: #03378a;
    margin-bottom: 0.325em;
    display: inline-block;
  }
  .link {
    font-size: 1em;
    color: #03378a;
    margin-bottom: 0.325em;
    display: inline-block;
  }
  .dt {
    font-size: 0.875em;
    color: #999;
  }
`;

const ListBlog = ({ blogname, contents, thumbnail, title, url, datetime }) => {
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <StyledListBlog>
      <StyledThumbs href={url} target="_blank" rel="noreferrer">
        <img src={thumbnail} alt={title} />
      </StyledThumbs>
      <StyledContent>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></a>
        <p
          className="content"
          dangerouslySetInnerHTML={{ __html: contents }}
        ></p>
        <a className="name" href={url} target="_blank" rel="noreferrer">
          {blogname}
        </a>{' '}
        |{' '}
        <a href={url} className="link" target="_blank" rel="noreferrer">
          {url}
        </a>
        <div className="dt">{date}</div>
      </StyledContent>
    </StyledListBlog>
  );
};

export default ListBlog;
