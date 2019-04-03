import { useState } from 'react';

function usePagination(itemsPerPage = 4) {
  const [page, setPage] = useState(1);

  const handleChangePage = pageToChange => {
    setPage(pageToChange < 1 ? 1 : pageToChange);
  };

  return [{ page, itemsPerPage }, handleChangePage];
}

export default usePagination;
