import { useSearchParams } from 'react-router-dom';
import { UrlStateType } from '../../types/types';

export const useFormSubmit = (fetchData: any, urlState: UrlStateType, currentPage: number) => {
  const { phrase, user, fileType, resultQuantity } = urlState;
  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(urlState);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
    setSearchParams();
    // console.log(searchParams);
  };

  return { handleSubmit };
};
