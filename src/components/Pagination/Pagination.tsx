import classes from './Pagination.module.css';

export default function Pagination({ currentPageNumber, pagesArr, changePage, loading }) {
  return (
    <div className={classes.pagination}>
      {pagesArr.map(pageNumber => (
        <button
          disabled={loading}
          className={currentPageNumber === pageNumber ? classes.btnActive : ''}
          key={pageNumber}
          onClick={() => changePage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
