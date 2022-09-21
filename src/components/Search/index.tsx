import { useQuery, UseQueryResult } from 'react-query';
import { useUrlState } from '../../hooks/useUrlState';
import { fetchFilesData } from '../../services/api/fetchFiles';
import { SearchForm } from '../SearchForm';
import { ResultPanel } from '../ResultPanel';
import styles from './style.module.scss';

const { wrapper } = styles;

export const Search = () => {
  const { urlState, currentPage, handleUrl, handlePage } = useUrlState();
  const { phrase, user, fileType, resultQuantity } = urlState;

  const { data, status, isSuccess, isFetching, refetch }: UseQueryResult = useQuery(
    'filesData',
    () => fetchFilesData({ phrase, user, fileType, currentPage, resultQuantity }),
    { enabled: false },
  );

  return (
    <section className={wrapper}>
      <SearchForm urlState={urlState} fetchData={refetch} handleUrl={handleUrl} />
      <ResultPanel
        isFetching={isFetching}
        isSuccess={isSuccess}
        data={data}
        currentPage={currentPage}
        resultQuantity={resultQuantity}
        fetchData={refetch}
        handlePage={handlePage}
      />
    </section>
  );
};
