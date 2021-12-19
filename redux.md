1. redux 설계

   - axios 요청하는 부분 전부 다 redux로 구성

   1. host(상수), cate, query, apiKey(상수), param
   2. page

2. 페이지 나오는 경우는 2가지 CASE
   - 검색 버튼 클릭 시
   - 페이저 버튼 클릭 시 OR 인터섹션 옵저버(아래 드래그)
