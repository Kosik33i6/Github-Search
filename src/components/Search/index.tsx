import { useQuery, UseQueryResult } from 'react-query';
import { useUrlState } from '../../hooks/useUrlState';
import { fetchFilesData } from '../../services/api/fetchFiles';
import { SearchForm } from '../SearchForm';
import { ResultPanel } from '../ResultPanel';
import styles from './style.module.scss';

const { wrapper } = styles;

export const Search = () => {
  const { urlState, handleUrl } = useUrlState();
  const { phrase, user, repo, fileType } = urlState;

  const { data, status, isSuccess, isFetching, refetch }: UseQueryResult = useQuery(
    'filesData',
    () => fetchFilesData({ phrase, user, repo, fileType }),
    { enabled: false },
  );

  return (
    <section className={wrapper}>
      <SearchForm urlState={urlState} fetchData={refetch} handleUrl={handleUrl} />
      <ResultPanel isFetching={isFetching} isSuccess={isSuccess} data={data} />
    </section>
  );
};
