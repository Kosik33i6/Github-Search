import { v4 as uuidv4 } from 'uuid';
import { TableProps } from './types';
import { JSONType } from '../../types/types';
import { TableRow } from '../TableRow';
import { Pagination } from '../Pagination';
import styles from './style.module.scss';

const { table, tableHeader, heading } = styles;

export const Table = ({ data, currentPage, resultQuantity, fetchData, handlePage }: TableProps) => {
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
      <Pagination
        currentPage={currentPage}
        totalCount={data.data.total_count}
        resultQuantity={Number(resultQuantity)}
        onPageChange={(page) => handlePage(page)}
        fetchData={fetchData}
      />
    </div>
  );
};
