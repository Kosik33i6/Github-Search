export type PaginationProps = {
  totalCount: number;
  siblingCount?: number;
  resultQuantity: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  fetchData: () => void;
};

export type UsePaginationArgs = {
  totalCount: number;
  resultQuantity: number;
  siblingCount: number;
  currentPage: number;
};
