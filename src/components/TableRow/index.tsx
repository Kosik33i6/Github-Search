import { TableRowProps } from './types';
import { ImageType } from '../../types/types';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal';

import styles from './style.module.scss';

const { row, rowCell, rowCellName, rowCellDescription, rowCellUser, rowCellImg, link, button, img } = styles;

export const TableRow = ({ data }: TableRowProps) => {
  const { isOpen, handleModal } = useModal();

  const avatarUrl = data.repository.owner.avatar_url;
  const user = data.repository.owner.login;
  const imageData: ImageType = {
    src: avatarUrl,
    alt: `avatar-${user.toLowerCase()}`,
  };

  return (
    <div className={row}>
      <div className={`${rowCell} ${rowCellName}`}>
        <span>{data.name}</span>
        <a className={link} target="_blank" rel="noreferrer" href={data.html_url}>
          Go to file
        </a>
      </div>
      <div className={`${rowCell} ${rowCellDescription}`}>
        <p>{data.repository.description ? data.repository.description : 'No description'}</p>
      </div>
      <div className={`${rowCell} ${rowCellUser}`}>
        <div className={rowCellImg}>
          <img className={img} src={imageData.src} alt={imageData.alt} />
        </div>
        <span>{data.repository.owner.login}</span>
        <button className={button} onClick={handleModal}>
          See more
        </button>
      </div>
      <Modal image={imageData} isOpen={isOpen} handleModal={handleModal} user={user} />
    </div>
  );
};
