import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '../../style';
import moment from 'moment';

import { close } from '../../modules/modal';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ModalWrap = styled.div`
  background-color: #fff;
`;

const ImgWrap = styled.div`
  position: relative;
`;

const Img = styled.img`
  max-height: 60vh;
  max-width: 80vw;
`;

const Close = styled.i`
  position: absolute;
  background-color: rgba(255, 0, 0, 0.7);
  color: #fff;
  width: 40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

const SizeWrap = styled.div`
  font-size: 0.875em;
  color: #999;
`;

const NameWrap = styled.div`
  font-size: 1.25em;
  color: #111;
`;

const Collection = styled.span``;

const Name = styled.span`
  text-decoration: underline;
`;

const Link = styled.a`
  color: #155daf;
  font-szie: 0.875em;
  display: inline-block;
  widht: 100%;
  overflow-wrap: break-word;
`;

const Date = styled.div`
  color: #999;
  font-size: 0.875em;
`;

const ModalCp = () => {
  const dispatch = useDispatch();
  const { img } = useSelector(({ modal }) => modal);

  const onClick = useCallback(() => {
    dispatch(close());
  }, [dispatch]);

  const onError = useCallback(
    (e) => {
      e.target.src = img.thumbnail_url;
    },
    [img]
  );

  return (
    <ModalWrapper>
      <ModalWrap>
        <ImgWrap>
          <Img
            src={img.image_url}
            alt={img.image_url}
            className="w100"
            onError={onError}
          />
          <Close className="fa fa-times" onClick={onClick} />
        </ImgWrap>
        <div className="p-3">
          <SizeWrap className="mb-2">{img.width + ' x ' + img.height}</SizeWrap>
          <NameWrap className="mb-2">
            <Collection>{`[${img.collection}]`}</Collection>
            <Name>{img.display_sitename}</Name>
          </NameWrap>
        </div>
        <Link href={img.doc_url} className="mb-2" traget="_blank"></Link>
        <Date>{moment(img.datetime).format('YYYY-MM-DD HH:mm:ss')}</Date>
      </ModalWrap>
    </ModalWrapper>
  );
};

export default React.memo(ModalCp);
