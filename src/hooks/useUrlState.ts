import { useState } from 'react';

export const useUrlState = () => {
  const [urlState, setUrlState] = useState({ phrase: '', user: '', repo: '', fileType: 'js' });

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const elementName = event.target.name;
    setUrlState((value) => {
      const newValue = { ...value };
      newValue[elementName as keyof typeof urlState] = event.target.value.trim();

      return newValue;
    });
  };

  return { urlState, handleUrl };
};
