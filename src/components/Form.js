import React from 'react';

const Form = ({ onChangeCateParam, onChangeQuery, onSubmit, query }) => {
  return (
    <form className="form-inline mb-5" onSubmit={onSubmit}>
      <select
        name="category"
        className="form-control mr-2"
        onChange={onChangeCateParam}
        defaultValue=""
      >
        <option value="">선택하세요</option>
        <option value="web">웹사이트</option>
        <option value="vclip">동영상</option>
        <option value="image">이미지</option>
        <option value="blog">블로그</option>
        <option value="book">도서</option>
        <option value="cafe">카페</option>
      </select>
      <input
        type="text"
        className="form-control mr-2 flex-grow-1"
        name="query"
        value={query}
        onChange={onChangeQuery}
        autoFocus
      />
      <button type="submit" className="btn btn-primary">
        검색
      </button>
    </form>
  );
};

export default React.memo(Form);
