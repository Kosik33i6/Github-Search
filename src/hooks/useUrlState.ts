import { useState } from 'react';

export const useUrlState = () => {
  const [urlState, setUrlState] = useState({ phrase: '', user: '', repo: '', fileType: '' });

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const elementName = event.target.name;
    console.log(event.target.value);
    setUrlState((value) => {
      const newValue = { ...value };
      newValue[elementName as keyof typeof urlState] = event.target.value;

      return newValue;
    });
  };

  return { urlState, handleUrl };
};
