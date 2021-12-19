import { createAction, handleActions } from 'redux-actions';
import ListThunk from '../lib/ListThunk';

/* Action Type */
const CATE = 'ajax/CATE';
const QUERY = 'ajax/QUERY';
const PARAM = 'ajax/PARAM';
const LIST = 'ajax/LIST';
const NOW = 'ajax/NOW';
/* Create Action */

export const Cate = createAction(CATE, (cate) => cate);
export const Query = createAction(QUERY, (query) => query);
export const Param = createAction(PARAM, (param) => param);
export const Now = createAction(NOW, (now) => now);
// thunk로 처리
export const List = createAction(LIST, (list) => list);
export const ListAsync = ListThunk(List, Now);

/* 초기 상태 */
const initialState = {
  host: 'https://dapi.kakao.com/',
  apiKey: 'KakaoAK 4545d096ee04bdcea13013e722fa668f',
  cate: '',
  query: '',
  param: 'v2',
  size: {
    web: 10,
    blog: 10,
    book: 10,
    cafe: 10,
    vclip: 15,
  },
  list: {},
  now: '',
};

const ajax = handleActions(
  {
    [CATE]: (state, action) => ({
      ...state,
      cate: action.payload,
    }),
    [QUERY]: (state, action) => ({
      ...state,
      query: action.payload,
    }),
    [PARAM]: (state, action) => ({
      ...state,
      param: action.payload,
    }),
    [NOW]: (state, action) => ({
      ...state,
      now: action.payload,
    }),
    [LIST]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  initialState
);

export default ajax;
