import { ColorRing } from 'react-loader-spinner';
import { ResultPanelProps } from './types';
import { Table } from '../Table';

import styles from './style.module.scss';

const { wrapper, center } = styles;

export const ResultPanel = ({
  isFetching,
  isSuccess,
  data,
  currentPage,
  resultQuantity,
  fetchData,
  handlePage,
}: ResultPanelProps) => {
  if (isFetching) {
    return (
      <div className={wrapper}>
        <div className={center}>
          <ColorRing
            visible={true}
            height="200"
            width="200"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#dc3545', '#d63384', '#20c997', '#0dcaf0', '#6610f2']}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={wrapper}>
      {isSuccess ? (
        <Table
          data={data}
          currentPage={currentPage}
          resultQuantity={resultQuantity}
          fetchData={fetchData}
          handlePage={handlePage}
        />
      ) : null}
    </div>
  );
};
