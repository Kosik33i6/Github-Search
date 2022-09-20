import { UseQueryResult } from 'react-query';

export type ResultPanelProps = {
  isFetching: boolean;
  isSuccess: boolean;
  data: unknown | UseQueryResult;
};
