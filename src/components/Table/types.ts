export type TableProps = {
  data: any;
  currentPage: number;
  resultQuantity: string;
  fetchData: () => void;
  handlePage: (page: number) => void;
};
