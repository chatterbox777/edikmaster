import Users from '../Users/Users';
import Pagination from '../Pagination/Pagination';
import { usePaginationFlow } from '../../hooks/usePaginationFlow';

export default function Main() {
  const { currentPageNumber, loading, filterUsers, pagesArr, handleCurrentPageNumber } = usePaginationFlow();

  return (
    <>
      <Users loading={loading} users={filterUsers} />

      <Pagination
        loading={loading}
        currentPageNumber={currentPageNumber}
        pagesArr={pagesArr}
        changePage={handleCurrentPageNumber}
      />
    </>
  );
}
