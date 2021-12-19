import { createAction, handleActions } from 'redux-actions';

const SHOW = 'modal/SHOW';
const CLOSE = 'modal/CLOSE';

export const show = createAction(SHOW, (img) => img);
export const close = createAction(CLOSE);

const initialState = {
  isShow: false,
  img: {
    collection: '',
    datetime: '',
    display_sitename: '',
    doc_url: '',
    width: 0,
    height: 0,
    image_url: '',
    thumbnail_url: '',
  },
};

const modal = handleActions(
  {
    [SHOW]: (state, action) => ({
      ...state,
      isShow: true,
      img: {
        ...action.payload,
      },
    }),
    [CLOSE]: (state, action) => ({
      ...state,
      isShow: false,
    }),
  },
  initialState
);

export default modal;
