import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';
import { PaginationProps } from './types';
import { usePagination, DOTS } from './hooks';
import styles from './styles.module.scss';

const { wrapper, wrapperItem, selected, wrapperItemDots, disabled, arrow, arrowLeft, arrowRight } = styles;

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  resultQuantity,
  fetchData,
}: PaginationProps) => {
  const { paginationRange } = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    resultQuantity,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    fetchData();
  };

  const onPrevious = () => {
    if (currentPage <= 1) return;
    onPageChange(currentPage - 1);
    fetchData();
  };

  const handlePage = (pageNumber: number) => {
    onPageChange(pageNumber);
    fetchData();
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={wrapper}>
      <li className={`${wrapperItem} ${currentPage === 1 ? disabled : ''}`} onClick={onPrevious}>
        <i className={`fa-solid fa-angle-left ${arrow} ${arrowLeft}`}></i>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={uuidv4()} className={classnames(wrapperItem, wrapperItemDots)}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={uuidv4()}
            className={`${wrapperItem} ${pageNumber === currentPage ? selected : ''}`}
            onClick={() => handlePage(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        key={uuidv4()}
        className={`${wrapperItem}  ${currentPage === lastPage ? disabled : ''}`}
        onClick={onNext}
      >
        <i className={`fa-solid fa-angle-right ${arrow} ${arrowRight}`}></i>
      </li>
    </ul>
  );
};

export default Pagination;
