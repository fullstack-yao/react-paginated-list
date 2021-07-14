import React, { FC } from 'react';

interface IPagination {
  pageCount: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}
const Pagination: FC<IPagination> = ({
  pageCount,
  currentPage,
  setCurrentPage
}) => {
  const onClickHandler = (direction: string) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < pageCount ) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={event => {onClickHandler('prev')}}>Prev</button>
      <div>{`${pageCount !==0 ? currentPage : 0} / ${pageCount}`}</div>
      <button onClick={event => {onClickHandler('next')}}>Next</button>
    </div>
  );
};

export default Pagination;