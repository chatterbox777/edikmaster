import { FunctionBody } from 'typescript';
import classes from './Pagination.module.css';

type PaginationProps = {
  currentPageNumber: number;
  pagesArr: [number];
  changePage: (pageNumber: number) => void;
  loading: boolean;
};

export default function Pagination({ currentPageNumber, pagesArr, changePage, loading }: PaginationProps) {
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
