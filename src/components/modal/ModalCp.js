import React from 'react';
import styled from '../../style';

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
  postion: absolute;
  background-color: rgba(255, 0, 0, 0.7);
  color: #fff;
  widht: 40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  curosr: pointer;
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
  return (
    <ModalWrapper>
      <ModalWrap>
        <ImgWrap>
          <Img src="http://via.placeholder.com/100" className="w100" />
          <Close className="fa fa-times" />
        </ImgWrap>
        <div className="p-3">
          <SizeWrap className="mb-2"></SizeWrap>
          <NameWrap className="mb-2">
            <Collection></Collection>
            <Name></Name>
          </NameWrap>
        </div>
        <Link className="mb-2" traget="_blank"></Link>
        <Date></Date>
      </ModalWrap>
    </ModalWrapper>
  );
};

export default ModalCp;
