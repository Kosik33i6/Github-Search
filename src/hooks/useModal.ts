import { useCallback, useState } from 'react';
import { UseModalType } from '../types/types';

export const useModal: UseModalType = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, handleModal };
};
