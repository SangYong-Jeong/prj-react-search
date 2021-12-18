import React from 'react';
import styled, { CommonLink } from '../../style';
import moment from 'moment';
import numeral from 'numeral';

const List = styled.li`
  width: 50%;
  padding: 2em;
  border-bottom: 1px solid #dedede;
  ::nth-of-type(odd) {
    border-right: 1px solid #dedede;
  }
`;

const Title = styled.a`
  font-size: 1.25em;
  color: #03378a;
  margin-bottom: 0.75em;
  display: inline-block;
`;

const InfoWrap = styled.div`
  display: flex;
  margin-bottom: 1em;
  align-imtes: flex-start;
`;

const ThumbWrap = styled.a`
  width: 130px;
  padding: 4px;
  border: 1px solid #03378a;
`;

const Img = styled.img``;

const InfoWp = styled.div`
  width: calc(100% - 140px);
  padding-left: 1.5em;
`;

const Authors = styled.div`
  margin-bottom: 0.75em;
`;

const Author = styled.span``;

const Translator = styled.span``;

const Prices = styled.div`
  margin-bottom: 0.625em;
  font-size: 1.125em;
`;

const Price = styled.span`
  color: #999;
  text-decoration: line-through;
`;

const SalePrice = styled.span`
  font-size: 1.125em;
  color: #03378a;
`;

const Status = styled.span`
  color: #999;
`;

const Publisher = styled.div`
  margin-bottom: 0.75em;
`;

const Isbn = styled.div`
  margin-bottom: 0.75em;
  color: #999;
`;

const Date = styled.div`
  color: #999;
`;

const Content = styled.a`
  color: #444;
  line-height: 1.25;
`;

const ListBook = ({
  url,
  title,
  thumbnail,
  authors,
  translators,
  price,
  sale_price,
  publisher,
  isbn,
  datetime,
  contents,
}) => {
  // console.log(price);
  const author = authors.join(', ');
  const translator = translators.join(', ');
  const isb = isbn.replace(' ', ' / ');
  const date = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
  return (
    <List>
      <Title href={url} target="_blank" rel="noreferrer">
        {title}
      </Title>
      <InfoWrap>
        <ThumbWrap href={url} target="_blank" rel="noreferrer">
          <Img
            src={
              thumbnail ||
              'http://via.placeholder.com/120x174/eee?text=No+image'
            }
            alt={title}
            className="w100"
          />
        </ThumbWrap>
        <InfoWp>
          <Authors>
            <Author>{author}</Author>
            {translators.length === 0 && <Translator>{translator}</Translator>}
          </Authors>
          <Prices>
            <Price>{price ? numeral(price).format('0,0') : price}</Price> |{' '}
            <SalePrice>
              {sale_price && sale_price > -1
                ? numeral(sale_price).format('0,0')
                : '판매중지'}
            </SalePrice>
            <Status></Status>
          </Prices>
          <Publisher></Publisher>
          <Isbn></Isbn>
          <Date></Date>
        </InfoWp>
      </InfoWrap>
      <Content></Content>
    </List>
  );
};

export default ListBook;
