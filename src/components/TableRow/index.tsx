import { TableRowProps } from './types';

import styles from './style.module.scss';

const { row, rowCell, rowCellName, rowCellDescription, rowCellUser, rowCellImg, link, button, img } = styles;

export const TableRow = ({ data }: TableRowProps) => {
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
          <img className={img} src={data.repository.owner.avatar_url} alt="avatar" />
        </div>
        <span>{data.repository.owner.login}</span>
        <button className={button}>See more</button>
      </div>
    </div>
  );
};
