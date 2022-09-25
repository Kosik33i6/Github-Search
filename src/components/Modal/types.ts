import { ImageType } from '../../types/types';

export type ModalProps = {
  image: ImageType;
  isOpen: boolean;
  user: string;
  handleModal: () => void;
};
