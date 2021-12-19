const pagerInit = (page, pagerCnt, pageCount, dispatch, changePage) => {
  let totalPage = Math.ceil(pageCount / 10);
  if (totalPage > 50) totalPage = 50;
  if (page > totalPage) dispatch(changePage(totalPage));

  let startPage = Math.floor((page - 1) / pagerCnt) * pagerCnt + 1;

  let endPage = startPage + pagerCnt - 1;
  if (endPage > totalPage) endPage = totalPage;
  const pageArr = [];
  for (let i = startPage; i <= endPage; i++) {
    pageArr.push(i);
  }
  return { totalPage, startPage, endPage, pageArr };
};

export default pagerInit;
