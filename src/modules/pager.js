import { createAction, handleActions } from 'redux-actions';

const CHANGE_PAGE = 'pager/CHANGE_PAGE';

export const changePage = createAction(CHANGE_PAGE, (page) => page);

const initialState = {
  page: 1,
  pagerCnt: 5,
};

const pager = handleActions(
  {
    [CHANGE_PAGE]: (state, action) => ({
      ...state,
      page: action.payload,
    }),
  },
  initialState
);

export default pager;
