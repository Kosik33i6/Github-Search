import { UseQueryResult } from 'react-query';

export type ResultPanelProps = {
  isFetching: boolean;
  isSuccess: boolean;
  data: unknown | UseQueryResult;
  currentPage: number;
  resultQuantity: string;
  error: any;
  fetchData: () => void;
  handlePage: (page: number) => void;
};
