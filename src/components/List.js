import React from 'react';
import ListWeb from './List/ListWeb';
import ListVideo from './List/ListVideo';
import ListImg from './List/ListImg';
import ListBlog from './List/ListBlog';
import ListBook from './List/ListBook';
import ListCafe from './List/ListCafe';

const List = ({ lists, category }) => {
  const { documents } = lists;
  const { current } = category;
  console.log(current);
  return (
    <ul>
      {documents &&
        current === 'web' &&
        documents.map((v, i) => (
          <ListWeb
            key={i}
            contents={v.contents}
            title={v.title}
            url={v.url}
            datetime={v.datetime}
          />
        ))}
      {documents &&
        current === 'vclip' &&
        documents.map((v, i) => (
          <ListVideo
            key={i}
            author={v.author}
            play_time={v.play_time}
            thumbnail={v.thumbnail}
            title={v.title}
            url={v.url}
            datetime={v.datetime}
          />
        ))}
      {documents &&
        current === 'image' &&
        documents.map((v, i) => (
          <ListImg
            key={i}
            collection={v.collection}
            display_sitename={v.display_sitename}
            doc_url={v.doc_url}
            image_url={v.image_url}
            thumbnail_url={v.thumbnail_url}
            datetime={v.datetime}
          />
        ))}
      {documents &&
        current === 'blog' &&
        documents.map((v, i) => (
          <ListBlog
            key={i}
            blogname={v.blogname}
            contents={v.contents}
            thumbnail={v.thumbnail}
            title={v.title}
            url={v.url}
            datetime={v.datetime}
          />
        ))}
      {documents &&
        current === 'book' &&
        documents.map((v, i) => (
          <ListVideo
            key={i}
            authors={v.authors} // 배열
            translators={v.translators} // 배열
            publisher={v.publisher}
            contents={v.contents}
            isbn={v.isbn}
            price={v.price}
            sale_price={v.sale_price}
            status={v.status}
            thumbnail={v.thumbnail}
            url={v.url}
            title={v.title}
            datetime={v.datetime}
          />
        ))}
      {documents &&
        current === 'cafe' &&
        documents.map((v, i) => (
          <ListCafe
            key={i}
            cafename={v.cafename}
            contents={v.contents}
            datetime={v.datetime}
            thumbnail={v.thumbnail}
            url={v.url}
          />
        ))}
    </ul>
  );
};

export default List;
