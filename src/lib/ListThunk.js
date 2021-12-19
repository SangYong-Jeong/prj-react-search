import axios from 'axios';

// 여기서 info는 객체
export default function ListThunk(type) {
  return (ajax) => async (dispatch) => {
    try {
      const { host, apiKey, query, param, cate, size } = ajax;
      const { data } = await axios.get(host + `${param}/search/${cate}`, {
        params: { query, page: 1, size: size[cate] },
        headers: { Authorization: apiKey },
      });
      dispatch(type(data));
    } catch (err) {
      console.log(err);
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
