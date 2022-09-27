import { UrlStateType } from '../../types/types';

export type SearchFormProps = {
  urlState: UrlStateType;
  currentPage: number;
  fetchData: () => void;
  handleUrl: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
};
