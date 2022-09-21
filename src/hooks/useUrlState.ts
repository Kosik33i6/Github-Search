import { useState } from 'react';

export const useUrlState = () => {
  const [urlState, setUrlState] = useState({
    phrase: '',
    user: '',
    fileType: 'js',
    resultQuantity: '10',
  });

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const elementName = event.target.name;
    setUrlState((value) => {
      const newValue = { ...value };
      newValue[elementName as keyof typeof urlState] = event.target.value.trim();
      return newValue;
    });
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return { urlState, currentPage, handleUrl, handlePage };
};
