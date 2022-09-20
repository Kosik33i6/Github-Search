import { UrlStateType } from '../../types/types';

export type SearchFormProps = {
  urlState: UrlStateType;
  fetchData: () => void;
  handleUrl: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
};
