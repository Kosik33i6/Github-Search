import { v4 as uuidv4 } from 'uuid';
import { TableProps } from './types';
import { JSONType } from '../../types/types';
import { TableRow } from '../TableRow';

import styles from './style.module.scss';

const { table, tableHeader, heading } = styles;

export const Table = ({ data }: TableProps) => {
  return (
    <div className={table}>
      <div className={tableHeader}>
        <div className={heading}>File Name</div>
        <div className={heading}>Description</div>
        <div className={heading}>User</div>
      </div>
      {data.data.items.map((item: JSONType) => (
        <TableRow key={uuidv4()} data={item} />
      ))}
      {/* <PaginatedItems/> */}
    </div>
  );
};
