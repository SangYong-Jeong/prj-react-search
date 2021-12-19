import axios from 'axios';

// 여기서 info는 객체 -> Form, PagerCp 공통적으로 쓰기
export default function ListThunk(type, type2) {
  return (ajax, changePage, page) => async (dispatch) => {
    try {
      const { host, apiKey, query, param, cate, size } = ajax;
      const { data } = await axios.get(host + `${param}/search/${cate}`, {
        params: { query, page, size: size[cate] },
        headers: { Authorization: apiKey },
      });
      dispatch(type(data));
      dispatch(changePage(page));
      dispatch(type2(cate));
    } catch (err) {
      console.log(err);
    }
  };
}

// 위의 모듈이랑 공통적으로 쓸 수 있는지 고민 필요
export function InfiniteThunk(type, type2) {
  return (ajax, changePage, page) => async (dispatch) => {
    try {
      const { host, apiKey, query, param, cate, size } = ajax;
      const { data } = await axios.get(host + `${param}/search/${cate}`, {
        params: { query, page, size: size[cate] },
        headers: { Authorization: apiKey },
      });
      dispatch(type(data));
      dispatch(changePage(page));
    } catch (err) {
      console.log(err);
      dispatch(type2(true));
    }
  };
}

/* info = {
  host: '', - > dotenv로 상수처리 가능
  apiKey: '', -> dotenv로 상수처리 가능
  cate: '',
  query: '',
  param: '',
  size: '' , -> state.ajax 객체를 인자로 넣는게 나을듯
} */

// 검색 버튼 눌러서 나오는 건 1 page 보여주게 하기 -> 해당 page에 있는 내용 보여줄 수 도 있음(일단 1page 부터)

// Pager 클릭 후 검색버튼 클릭 시 1page 갈 때 전역변수 page도 1로 dispatch 해줘야 함
